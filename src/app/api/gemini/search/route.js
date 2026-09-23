import { getGeminiClient } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { query } = body;

    if (!query || !query.trim()) {
      return NextResponse.json(
        { error: "Query is required for search-grounded lookup." },
        { status: 400 }
      );
    }

    const ai = getGeminiClient();

    // Use gemini-3.5-flash with googleSearch tool as strictly required
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction:
          "You are SpaceMakers Live Market & Skills Intelligence agent. Provide verified, up-to-date information on Kenyan TVET trades, vocational training, trade certifications (NITA, TVETA), market labor rates in KES, and trade tools. Always cite your findings clearly.",
      },
    });

    const text = response.text || "No insights found.";
    const rawChunks =
      response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    // Extract web sources from grounding metadata
    const sources = [];
    for (const chunk of rawChunks) {
      if (chunk.web?.uri) {
        sources.push({
          title: chunk.web.title || "Web Reference",
          url: chunk.web.uri,
        });
      }
    }

    const webSearchQueries =
      response.candidates?.[0]?.groundingMetadata?.webSearchQueries || [];

    return NextResponse.json({
      text,
      sources,
      webSearchQueries,
      modelUsed: "gemini-3.5-flash",
    });
  } catch (error) {
    console.error("[Gemini Search Grounding Error]:", error);
    return NextResponse.json(
      {
        error:
          error.message ||
          "Failed to perform search-grounded inquiry with Gemini.",
      },
      { status: 500 }
    );
  }
}
