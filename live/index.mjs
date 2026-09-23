import { upgradeWebSocket } from "@neon/functions";
import { GoogleGenAI, Modality } from "@google/genai";
import crypto from "node:crypto";

const HEARTBEAT_MS = 25_000;
const CERTS_URL =
  "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";

let certCache = { expiresAt: 0, map: null };

function base64UrlToBuffer(value) {
  const b64 = value.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(b64, "base64");
}

async function getCerts() {
  if (certCache.map && Date.now() < certCache.expiresAt) return certCache.map;
  const res = await fetch(CERTS_URL);
  if (!res.ok) throw new Error(`cert fetch failed: ${res.status}`);
  const map = await res.json();
  certCache = { expiresAt: Date.now() + 4 * 60 * 1000, map };
  return map;
}

async function verifyFirebaseIdToken(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;

  let header;
  let payload;
  try {
    header = JSON.parse(base64UrlToBuffer(parts[0]).toString("utf8"));
    payload = JSON.parse(base64UrlToBuffer(parts[1]).toString("utf8"));
  } catch {
    return null;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  if (header.alg !== "RS256") return null;
  if (payload.aud !== projectId) return null;
  if (payload.iss !== `https://securetoken.google.com/${projectId}`) return null;
  if (!payload.sub || typeof payload.sub !== "string") return null;
  if (typeof payload.exp !== "number" || payload.exp * 1000 < Date.now()) return null;

  try {
    const certs = await getCerts();
    const cert = certs[header.kid];
    if (!cert) return null;
    const publicKey = new crypto.X509Certificate(cert).publicKey;
    const verifier = crypto.createVerify("RSA-SHA256");
    verifier.update(`${parts[0]}.${parts[1]}`);
    if (!verifier.verify(publicKey, base64UrlToBuffer(parts[2]))) return null;
  } catch (err) {
    console.error("[livevoice] token verification error:", err?.message);
    return null;
  }

  return payload;
}

async function probeToken(token) {
  const result = {
    tokenProvided: typeof token === "string" && token.length > 0,
    env: {
      GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "(missing)",
    },
    checks: {},
  };
  if (!result.tokenProvided) return result;
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return { ...result, checks: { split: "not 3 parts" } };
    let header, payload;
    try {
      header = JSON.parse(base64UrlToBuffer(parts[0]).toString("utf8"));
      payload = JSON.parse(base64UrlToBuffer(parts[1]).toString("utf8"));
    } catch (err) {
      return { ...result, checks: { decode: err.message } };
    }
    result.checks.alg = header.alg;
    result.checks.kid = header.kid;
    result.checks.aud = payload.aud;
    result.checks.iss = payload.iss;
    result.checks.expOk = typeof payload.exp === "number" && payload.exp * 1000 > Date.now();
    try {
      const certs = await getCerts();
      result.checks.certCount = Object.keys(certs).length;
      result.checks.kidFound = !!certs[header.kid];
      if (certs[header.kid]) {
        const publicKey = new crypto.X509Certificate(certs[header.kid]).publicKey;
        const verifier = crypto.createVerify("RSA-SHA256");
        verifier.update(`${parts[0]}.${parts[1]}`);
        result.checks.signatureValid = verifier.verify(publicKey, base64UrlToBuffer(parts[2]));
      }
    } catch (err) {
      result.checks.certError = err.message;
    }
  } catch (err) {
    result.checks.outerError = err.message;
  }
  return result;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.searchParams.has("probe")) {
      const probe = await probeToken(url.searchParams.get("token"));
      return new Response(JSON.stringify(probe, null, 2), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    if (request.headers.get("upgrade")?.toLowerCase() !== "websocket") {
      return new Response(
        "This is a WebSocket endpoint. Connect with wss:// and ?token=<firebase-id-token>",
        { status: 426 },
      );
    }

    const identity = await verifyFirebaseIdToken(
      new URL(request.url).searchParams.get("token"),
    );
    if (!identity) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { socket, response } = upgradeWebSocket(request);
    socket.binaryType = "arraybuffer";

    let session = null;
    let heartbeat = null;

    const send = (payload) => {
      if (socket.readyState === socket.OPEN) {
        socket.send(JSON.stringify(payload));
      }
    };

    socket.addEventListener("open", async () => {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("[livevoice] Missing GEMINI_API_KEY");
        send({ type: "error", error: "GEMINI_API_KEY is not configured on the server." });
        socket.close();
        return;
      }

      try {
        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: { headers: { "User-Agent": "aistudio-build" } },
        });

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
                const parts = message.serverContent?.modelTurn?.parts;
                if (parts && parts.length > 0) {
                  for (const part of parts) {
                    if (part.inlineData?.data) {
                      send({ type: "audio", audio: part.inlineData.data });
                    }
                    if (part.text) {
                      send({ type: "text", text: part.text });
                    }
                  }
                }
                if (message.serverContent?.interrupted) {
                  send({ type: "interrupted", interrupted: true });
                }
                if (message.serverContent?.turnComplete) {
                  send({ type: "turnComplete" });
                }
              } catch (err) {
                console.error("[livevoice] Error processing Gemini message:", err);
              }
            },
            onclose: () => {
              console.log("[livevoice] Gemini session closed");
              try {
                send({ type: "closed" });
              } catch {}
            },
            onerror: (err) => {
              console.error("[livevoice] Gemini session error:", err);
              try {
                send({
                  type: "error",
                  error: err?.message || "Live API session encountered an error.",
                });
              } catch {}
            },
          },
        });

        send({
          type: "connected",
          message: "Connected to Gemini 3.8 Live API session.",
        });

        heartbeat = setInterval(() => {
          if (socket.readyState === socket.OPEN) {
            socket.send('{"type":"ping"}');
          }
        }, HEARTBEAT_MS);
        heartbeat.unref?.();
      } catch (err) {
        console.error("[livevoice] Failed to connect to Gemini 3.8 Live:", err);
        send({ type: "error", error: err?.message || "Failed to connect to Gemini 3.8 Live." });
        socket.close();
      }
    });

    socket.addEventListener("message", (event) => {
      if (typeof event.data !== "string") return;
      try {
        const payload = JSON.parse(event.data);
        if (payload.audio && session) {
          session.sendRealtimeInput({
            audio: { data: payload.audio, mimeType: "audio/pcm;rate=16000" },
          });
        } else if (payload.text && session) {
          session.sendRealtimeInput({ text: payload.text });
        }
      } catch (err) {
        console.error("[livevoice] Error handling client message:", err);
      }
    });

    socket.addEventListener("close", () => {
      console.log("[livevoice] Client disconnected");
      if (heartbeat) clearInterval(heartbeat);
      if (session) {
        try {
          session.close();
        } catch (err) {
          console.warn("[livevoice] Error closing session:", err);
        }
      }
    });

    return response;
  },
};