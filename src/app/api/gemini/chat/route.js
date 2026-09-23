import { getGeminiClient } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      message,
      history = [],
      model = "gemini-3.5-flash",
      role = "advisor",
      customSystemPrompt,
    } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message content is required." },
        { status: 400 }
      );
    }

    const ai = getGeminiClient();

    // Map role to system instruction
    const roleInstructions = {
      advisor:
        "You are SpaceMakers AI Career Advisor for TVET (Technical and Vocational Education and Training) graduates in Kenya (Nairobi, Githogoro, etc.). Help artisans, plumbers, electricians, caterers, tailors, welders, and masons polish their CVs, negotiate fair gig rates, prepare for technical interviews, and grow their trade businesses. Keep responses practical, encouraging, and culturally attuned to the Kenyan informal and formal labour market (mentioning KES currency where applicable).",
      recruiter:
        "You are SpaceMakers Employer Talent Consultant. You help homeowners, contractors, small businesses, and institutions find, evaluate, and hire verified TVET tradespeople. You assist with scoping project deliverables, estimating fair budgets, drafting trade contracts, and ensuring occupational health & safety compliance.",
      mentor:
        "You are SpaceMakers Senior Master Craftsman & Technical Mentor. You provide deep technical advice on trade standards, wiring codes (BS 7671/KEBS), plumbing gradient equations, welding joint preparation, concrete mixes, and fabric cutting formulas.",
    };

    const systemInstruction =
      customSystemPrompt || roleInstructions[role] || roleInstructions.advisor;

    // Build contents for multi-turn conversation
    // Format contents as required by @google/genai: array of { role: 'user' | 'model', parts: [{ text }] }
    const formattedContents = [];

    for (const h of history) {
      if (h.content && h.content.trim()) {
        formattedContents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }],
        });
      }
    }

    // Append current user message
    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

    // Validated models based on prompt requirements
    const allowedModels = [
      "gemini-3.5-flash",
      "gemini-3.1-pro-preview",
      "gemini-3.1-flash-lite",
      "gemini-3.8-flash",
    ];

    let selectedModel = allowedModels.includes(model)
      ? model
      : "gemini-3.5-flash";

    let response;
    let modelUsed = selectedModel;

    try {
      response = await ai.models.generateContent({
        model: selectedModel,
        contents: formattedContents,
        config: {
          systemInstruction,
        },
      });
    } catch (primaryErr) {
      console.warn(
        `[Gemini Chat] Primary model ${selectedModel} failed (${primaryErr?.message}), trying resilient fallback.`
      );
      // Fallback to gemini-3.8-flash or gemini-3.1-flash-lite if 3.5-flash or 3.1-pro hits high demand
      const fallbackModel =
        selectedModel === "gemini-3.8-flash"
          ? "gemini-3.1-flash-lite"
          : "gemini-3.8-flash";
      response = await ai.models.generateContent({
        model: fallbackModel,
        contents: formattedContents,
        config: {
          systemInstruction,
        },
      });
      modelUsed = fallbackModel;
    }

    const reply = response.text || "I was unable to generate a response.";

    return NextResponse.json({
      reply,
      modelUsed,
      role,
    });
  } catch (error) {
    console.error("[Gemini Chat API Error]:", error);
    return NextResponse.json(
      {
        error:
          error.message ||
          "Failed to process chat conversation with Gemini API.",
      },
      { status: 500 }
    );
  }
}
