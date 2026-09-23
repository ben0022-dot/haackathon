import { GoogleGenAI } from "@google/genai";

let aiInstance = null;

export function getGeminiClient() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured on the server.");
    }
    aiInstance = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

export default getGeminiClient;

function skillNames(user) {
  return (user.skills || [])
    .map((us) => `${us.skill?.name || "Unknown"}${us.experienceLevel ? ` (${us.experienceLevel})` : ""}`)
    .join(", ");
}

function requiredSkills(opportunity) {
  return (opportunity.skills || []).map((os) => os.skill?.name).filter(Boolean).join(", ");
}

export async function generateMatchExplanation({ opportunity, profile }) {
  const prompt = [
    "You are a helpful career match assistant for SpaceMakers, a marketplace connecting TVET graduates with verified local gigs in Kenya.",
    "Explain in 2-3 short sentences why this specific job fits the worker. Be specific to their skills, experience, and location.",
    "Keep it warm, practical, and under 60 words. Use plain text, no markdown, no bullet points.",
    "",
    `JOB TITLE: ${opportunity.title}`,
    `JOB TYPE: ${opportunity.type}`,
    `LOCATION: ${opportunity.location}`,
    `PAYMENT: ${opportunity.payment ? `KES ${opportunity.payment}` : "Negotiable"} (${opportunity.paymentType})`,
    `REQUIRED SKILLS: ${requiredSkills(opportunity) || "Any"}`,
    `DESCRIPTION: ${(opportunity.description || "").slice(0, 400)}`,
    "",
    `WORKER NAME: ${profile.name}`,
    `WORKER LOCATION: ${profile.location || "Not set"}`,
    `WORKER SKILLS: ${skillNames(profile) || "None listed"}`,
    `WORKER BIO: ${profile.bio || "Not set"}`,
  ].join("\n");

  const res = await getGeminiClient().models.generateContent({
    model: process.env.GEMINI_MODEL || "gemini-2.0-flash",
    contents: prompt,
    config: {
      temperature: 0.6,
      maxOutputTokens: 120,
    },
  });

  const text = res?.text?.trim();
  if (!text) {
    throw new Error("Gemini returned no explanation.");
  }
  return text;
}