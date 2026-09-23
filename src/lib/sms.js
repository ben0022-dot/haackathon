import crypto from "node:crypto";

const AT_PRODUCTION_API = "https://api.africastalking.com/version1/messaging";
const AT_SANDBOX_API = "https://api.sandbox.africastalking.com/version1/messaging";

export function generateOtp(length = 6) {
  const max = 10 ** length;
  return String(crypto.randomInt(0, max)).padStart(length, "0");
}

export function hashOtp(code) {
  return crypto.createHash("sha256").update(String(code)).digest("hex");
}

export function normalizePhone(input) {
  if (!input) return null;
  let phone = String(input).replace(/[\s()-]/g, "");
  if (phone.startsWith("+")) phone = phone.slice(1);
  if (phone.length === 9 && phone.startsWith("7")) phone = `254${phone}`;
  if (phone.length === 10 && phone.startsWith("0")) phone = `254${phone.slice(1)}`;
  if (!phone.startsWith("254") || phone.length !== 12) return null;
  return `+${phone}`;
}

export function smsProviderConfigured() {
  return Boolean(process.env.AT_USERNAME && process.env.AT_API_KEY);
}

export function sendSms(phone, message) {
  if (smsProviderConfigured()) {
    const sandbox = process.env.AT_USERNAME === "sandbox";
    const endpoint = sandbox ? AT_SANDBOX_API : AT_PRODUCTION_API;
    const body = new URLSearchParams({
      username: process.env.AT_USERNAME,
      to: phone,
      message,
    });
    return fetch(endpoint, {
      method: "POST",
      headers: {
        apiKey: process.env.AT_API_KEY,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.error || "SMS provider error");
        return { ok: true, dev: sandbox };
      })
      .catch((err) => ({ ok: false, dev: false, error: err?.message }));
  }
  console.log(`[SpaceMakers][DEV-SMS] To ${phone}: ${message}`);
  return Promise.resolve({ ok: true, dev: true });
}