import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { WebSocketServer } from "ws";
import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, hostname: "0.0.0.0", port });
const handle = app.getRequestHandler();

console.log("[SpaceMakers] Preparing Next.js App...");
await app.prepare();

const server = createServer(async (req, res) => {
  try {
    const parsedUrl = parse(req.url, true);
    await handle(req, res, parsedUrl);
  } catch (err) {
    console.error("[SpaceMakers] Request error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

// Setup WebSocket server for Gemini Live API
const wss = new WebSocketServer({ noServer: true });

server.on("upgrade", (req, socket, head) => {
  const { pathname } = parse(req.url);
  if (pathname === "/api/live-ws" || pathname === "/live") {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  } else {
    // If not our live endpoint, let Next.js or close
    socket.destroy();
  }
});

wss.on("connection", async (clientWs) => {
  console.log("[Live API] Client connected to live voice session");

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("[Live API] Missing GEMINI_API_KEY");
    clientWs.send(
      JSON.stringify({
        error: "GEMINI_API_KEY is not configured on the server.",
      })
    );
    clientWs.close();
    return;
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  let session = null;

  try {
    session = await ai.live.connect({
      model: "gemini-3.8-live",
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Zephyr" },
          },
        },
        systemInstruction:
          "You are SpaceMakers Live Voice Assistant, a friendly and experienced TVET career and trades coach in Kenya. You speak concisely, warmly, and helpfully with artisans, contractors, and vocational students. Use Kenyan context and currency (KES) where appropriate.",
      },
      callbacks: {
        onmessage: (message) => {
          try {
            // Check for audio data in model turn
            const parts = message.serverContent?.modelTurn?.parts;
            if (parts && parts.length > 0) {
              for (const part of parts) {
                if (part.inlineData?.data) {
                  clientWs.send(
                    JSON.stringify({
                      type: "audio",
                      audio: part.inlineData.data,
                    })
                  );
                }
                if (part.text) {
                  clientWs.send(
                    JSON.stringify({
                      type: "text",
                      text: part.text,
                    })
                  );
                }
              }
            }

            // Check if user interrupted model playback
            if (message.serverContent?.interrupted) {
              clientWs.send(
                JSON.stringify({
                  type: "interrupted",
                  interrupted: true,
                })
              );
            }

            // Check for turn complete
            if (message.serverContent?.turnComplete) {
              clientWs.send(
                JSON.stringify({
                  type: "turnComplete",
                })
              );
            }
          } catch (err) {
            console.error("[Live API] Error processing Gemini message:", err);
          }
        },
        onclose: () => {
          console.log("[Live API] Gemini session closed");
          try {
            clientWs.send(JSON.stringify({ type: "closed" }));
          } catch {}
        },
        onerror: (err) => {
          console.error("[Live API] Gemini session error:", err);
          try {
            clientWs.send(
              JSON.stringify({
                type: "error",
                error: err?.message || "Live API session encountered an error.",
              })
            );
          } catch {}
        },
      },
    });

    clientWs.send(
      JSON.stringify({
        type: "connected",
        message: "Connected to Gemini 3.8 Live API session.",
      })
    );
  } catch (err) {
    console.error("[Live API] Failed to connect to Gemini 3.8 Live:", err);
    clientWs.send(
      JSON.stringify({
        type: "error",
        error:
          err?.message || "Failed to establish connection to Gemini 3.8 Live.",
      })
    );
    clientWs.close();
    return;
  }

  clientWs.on("message", (data) => {
    try {
      const payload = JSON.parse(data.toString());

      if (payload.audio && session) {
        session.sendRealtimeInput({
          audio: {
            data: payload.audio,
            mimeType: "audio/pcm;rate=16000",
          },
        });
      } else if (payload.text && session) {
        session.sendRealtimeInput({
          text: payload.text,
        });
      }
    } catch (err) {
      console.error("[Live API] Error handling client message:", err);
    }
  });

  clientWs.on("close", () => {
    console.log("[Live API] Client disconnected");
    if (session) {
      try {
        session.close();
      } catch (err) {
        console.warn("[Live API] Error closing session:", err);
      }
    }
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`[SpaceMakers] Ready on http://0.0.0.0:${port} with Gemini Live WebSockets!`);
});
