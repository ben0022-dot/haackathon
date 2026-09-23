"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Mic, MicOff, Volume2, Radio, AlertCircle, Play, Square, MessageSquare } from "lucide-react";

// Helpers for 16-bit PCM little-endian conversion
function floatTo16BitPCM(float32Array) {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);
  let offset = 0;
  for (let i = 0; i < float32Array.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, float32Array[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buffer;
}

function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export default function LiveVoiceConversation() {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState("disconnected"); // 'disconnected' | 'connecting' | 'listening' | 'speaking' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [transcripts, setTranscripts] = useState([
    {
      id: "intro",
      speaker: "system",
      text: "Ready to start a live voice conversation using Gemini 3.8 Live API. Tap 'Start Voice Session' to speak.",
    },
  ]);
  const [isMuted, setIsMuted] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  // Audio Context and Stream References
  const wsRef = useRef(null);
  const inputAudioCtxRef = useRef(null);
  const outputAudioCtxRef = useRef(null);
  const micStreamRef = useRef(null);
  const processorRef = useRef(null);
  const nextStartTimeRef = useRef(0);
  const activeSourcesRef = useRef([]);
  const isMutedRef = useRef(false);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  const stopPlaybackAndClearQueue = useCallback(() => {
    // Stop all pending / active sources
    for (const source of activeSourcesRef.current) {
      try {
        source.stop();
      } catch {}
    }
    activeSourcesRef.current = [];
    if (outputAudioCtxRef.current) {
      nextStartTimeRef.current = outputAudioCtxRef.current.currentTime;
    }
  }, []);

  const playPcmChunk = useCallback((base64Pcm) => {
    if (!outputAudioCtxRef.current) {
      outputAudioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: 24000,
      });
    }

    const audioCtx = outputAudioCtxRef.current;
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const pcmData = base64ToArrayBuffer(base64Pcm);
    const int16Array = new Int16Array(pcmData);
    const float32Array = new Float32Array(int16Array.length);

    for (let i = 0; i < int16Array.length; i++) {
      float32Array[i] = int16Array[i] / 32768.0;
    }

    const audioBuffer = audioCtx.createBuffer(1, float32Array.length, 24000);
    audioBuffer.getChannelData(0).set(float32Array);

    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);

    // Schedule gapless playback as required by Live API rules
    const now = audioCtx.currentTime;
    const startTime = Math.max(now, nextStartTimeRef.current);
    source.start(startTime);
    nextStartTimeRef.current = startTime + audioBuffer.duration;

    activeSourcesRef.current.push(source);
    setStatus("speaking");

    source.onended = () => {
      activeSourcesRef.current = activeSourcesRef.current.filter((s) => s !== source);
      if (activeSourcesRef.current.length === 0) {
        setStatus("listening");
      }
    };
  }, []);

  const cleanupSession = useCallback(() => {
    stopPlaybackAndClearQueue();

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach((track) => track.stop());
      micStreamRef.current = null;
    }

    if (inputAudioCtxRef.current) {
      inputAudioCtxRef.current.close().catch(() => {});
      inputAudioCtxRef.current = null;
    }

    if (outputAudioCtxRef.current) {
      outputAudioCtxRef.current.close().catch(() => {});
      outputAudioCtxRef.current = null;
    }

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    setIsActive(false);
    setStatus("disconnected");
    setAudioLevel(0);
  }, [stopPlaybackAndClearQueue]);

  useEffect(() => {
    return () => {
      cleanupSession();
    };
  }, [cleanupSession]);

  async function startSession() {
    setErrorMessage("");
    setStatus("connecting");

    try {
      // 1. Initialize microphone stream at 16kHz
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      micStreamRef.current = stream;

      const inputCtx = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: 16000,
      });
      inputAudioCtxRef.current = inputCtx;

      // 2. Output context at 24kHz for Gemini Live model output
      const outputCtx = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: 24000,
      });
      outputAudioCtxRef.current = outputCtx;
      nextStartTimeRef.current = outputCtx.currentTime;

      // 3. Connect WebSocket to server.mjs
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const wsUrl = `${protocol}//${window.location.host}/api/live-ws`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setStatus("listening");
        setIsActive(true);
        setTranscripts((prev) => [
          ...prev,
          {
            id: `sys-${Date.now()}`,
            speaker: "system",
            text: "Connected to Gemini 3.8 Live API session. You may speak now!",
          },
        ]);

        // Start processing microphone input
        const source = inputCtx.createMediaStreamSource(stream);
        // Using ScriptProcessorNode with 4096 buffer size
        const processor = inputCtx.createScriptProcessor(4096, 1, 1);
        processorRef.current = processor;

        processor.onaudioprocess = (e) => {
          if (isMutedRef.current || ws.readyState !== WebSocket.OPEN) return;

          const inputData = e.inputBuffer.getChannelData(0);

          // Calculate approximate volume level for UI visualizer
          let sum = 0;
          for (let i = 0; i < inputData.length; i++) {
            sum += inputData[i] * inputData[i];
          }
          const rms = Math.sqrt(sum / inputData.length);
          setAudioLevel(Math.min(100, Math.round(rms * 400)));

          // Convert to 16-bit PCM little-endian
          const pcmBuffer = floatTo16BitPCM(inputData);
          const base64Audio = arrayBufferToBase64(pcmBuffer);

          ws.send(JSON.stringify({ audio: base64Audio }));
        };

        source.connect(processor);
        processor.connect(inputCtx.destination);
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);

          if (msg.type === "audio" && msg.audio) {
            playPcmChunk(msg.audio);
          } else if (msg.type === "interrupted") {
            stopPlaybackAndClearQueue();
            setStatus("listening");
          } else if (msg.type === "turnComplete") {
            setStatus("listening");
          } else if (msg.type === "text" && msg.text) {
            setTranscripts((prev) => [
              ...prev,
              {
                id: `gemini-${Date.now()}`,
                speaker: "gemini",
                text: msg.text,
              },
            ]);
          } else if (msg.type === "error") {
            setErrorMessage(msg.error);
            setStatus("error");
          }
        } catch (err) {
          console.error("Live API WS message error:", err);
        }
      };

      ws.onerror = (err) => {
        console.error("WebSocket error:", err);
        setErrorMessage("Connection error with Live API WebSocket bridge.");
        setStatus("error");
      };

      ws.onclose = () => {
        cleanupSession();
      };
    } catch (err) {
      console.error("Failed to start voice session:", err);
      setErrorMessage(
        err.name === "NotAllowedError"
          ? "Microphone access denied. Please allow microphone permissions in your browser."
          : err.message || "Failed to start microphone or WebSocket connection."
      );
      setStatus("error");
      cleanupSession();
    }
  }

  function handleEndSession() {
    cleanupSession();
    setTranscripts((prev) => [
      ...prev,
      {
        id: `sys-end-${Date.now()}`,
        speaker: "system",
        text: "Voice conversation ended.",
      },
    ]);
  }

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Radio size={22} color={isActive ? "var(--primary)" : "var(--text-secondary)"} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Real-Time Voice: Gemini 3.8 Live API</h3>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: 4 }}>
            Low-latency bi-directional speech. Speak with SpaceMakers career and trade advisor in real time.
          </p>
        </div>

        {/* Status Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.82rem",
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: "999px",
              background:
                status === "listening"
                  ? "var(--primary-soft)"
                  : status === "speaking"
                  ? "var(--accent)"
                  : status === "connecting"
                  ? "var(--warning-soft)"
                  : status === "error"
                  ? "var(--danger-soft)"
                  : "var(--background)",
              color:
                status === "listening"
                  ? "var(--primary-dark)"
                  : status === "speaking"
                  ? "#fff"
                  : status === "connecting"
                  ? "var(--warning)"
                  : status === "error"
                  ? "var(--danger)"
                  : "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background:
                  status === "listening"
                    ? "var(--primary)"
                    : status === "speaking"
                    ? "#fff"
                    : status === "connecting"
                    ? "var(--warning)"
                    : status === "error"
                    ? "var(--danger)"
                    : "var(--border)",
                animation: isActive ? "pulse 1.5s infinite" : "none",
              }}
            />
            {status === "listening"
              ? "Listening (Speak Now)"
              : status === "speaking"
              ? "Gemini Speaking..."
              : status === "connecting"
              ? "Connecting to Live..."
              : status === "error"
              ? "Connection Error"
              : "Disconnected"}
          </span>
        </div>
      </div>

      {errorMessage && (
        <div
          style={{
            background: "var(--danger-soft)",
            color: "var(--danger)",
            border: "1px solid color-mix(in srgb, var(--danger) 30%, transparent)",
            borderRadius: "var(--radius-sm)",
            padding: "12px 16px",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Main Interactive Stage */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "36px 16px",
          background: "var(--background)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          gap: 18,
          textAlign: "center",
        }}
      >
        {/* Pulsing visualizer circle */}
        <div
          style={{
            position: "relative",
            width: 110,
            height: 110,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isActive ? "var(--primary)" : "var(--surface)",
            color: isActive ? "#fff" : "var(--text-secondary)",
            boxShadow: isActive
              ? `0 0 0 ${Math.max(6, audioLevel / 2)}px rgba(0, 132, 61, 0.25)`
              : "var(--shadow)",
            transition: "box-shadow 0.1s ease",
          }}
        >
          {status === "speaking" ? (
            <Volume2 size={44} />
          ) : isMuted ? (
            <MicOff size={44} color="var(--danger)" />
          ) : (
            <Mic size={44} />
          )}
        </div>

        <div>
          <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
            {!isActive
              ? "Start a Hands-Free Voice Session"
              : status === "speaking"
              ? "Gemini 3.8 is responding..."
              : isMuted
              ? "Microphone is Muted"
              : "Listening for your voice..."}
          </h4>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: 4, maxWidth: 440 }}>
            {!isActive
              ? "Ask questions regarding plumbing, wiring, catering, market rates, or hiring. Gemini responds aloud with voice."
              : "Just speak naturally into your microphone. You can interrupt Gemini anytime by speaking."}
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {!isActive ? (
            <button
              type="button"
              onClick={startSession}
              disabled={status === "connecting"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: "999px",
                background: "var(--primary)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "var(--shadow)",
              }}
            >
              <Play size={18} />
              Start Voice Session
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setIsMuted((v) => !v)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: isMuted ? "var(--danger-soft)" : "var(--surface)",
                  color: isMuted ? "var(--danger)" : "var(--text-primary)",
                  border: "1px solid var(--border)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
              >
                {isMuted ? <Mic size={16} /> : <MicOff size={16} />}
                {isMuted ? "Unmute Mic" : "Mute Mic"}
              </button>

              <button
                type="button"
                onClick={handleEndSession}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: "999px",
                  background: "var(--danger)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Square size={16} />
                End Conversation
              </button>
            </>
          )}
        </div>
      </div>

      {/* Live transcript & instructions log */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)" }}>
          <MessageSquare size={16} />
          <span>Session Log & Voice Prompts</span>
        </div>
        <div
          style={{
            maxHeight: 180,
            overflowY: "auto",
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)",
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            fontSize: "0.85rem",
          }}
        >
          {transcripts.map((t) => (
            <div key={t.id} style={{ display: "flex", gap: 8 }}>
              <span
                style={{
                  fontWeight: 700,
                  color:
                    t.speaker === "gemini"
                      ? "var(--primary-dark)"
                      : t.speaker === "system"
                      ? "var(--text-secondary)"
                      : "var(--accent)",
                  minWidth: 60,
                }}
              >
                {t.speaker === "gemini" ? "Gemini:" : t.speaker === "system" ? "System:" : "You:"}
              </span>
              <span style={{ color: "var(--text-primary)", flex: 1 }}>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
