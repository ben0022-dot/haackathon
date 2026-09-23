const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

function skillNames(user) {
  return (user.skills || [])
    .map((us) => `${us.skill?.name || "Unknown"}${us.experienceLevel ? ` (${us.experienceLevel})` : ""}`)
    .join(", ");
}

function requiredSkills(opportunity) {
  return (opportunity.skills || []).map((os) => os.skill?.name).filter(Boolean).join(", ");
}

export async function generateMatchExplanation({ opportunity, profile }) {
  if (!API_KEY) {
    return "No match explanation key configured for this deployment.";
  }

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

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 120,
        },
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Gemini request failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!text) {
    throw new Error("Gemini returned no explanation.");
  }
  return text;
}