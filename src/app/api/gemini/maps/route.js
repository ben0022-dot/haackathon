import { getGeminiClient } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { query, latitude, longitude } = body;

    if (!query || !query.trim()) {
      return NextResponse.json(
        { error: "Query is required for maps-grounded search." },
        { status: 400 }
      );
    }

    const ai = getGeminiClient();

    // Default to Nairobi coordinates if none provided
    const userLat = typeof latitude === "number" ? latitude : -1.286389;
    const userLng = typeof longitude === "number" ? longitude : 36.817223;

    // Use gemini-3.5-flash with googleMaps tool as required by specification
    const config = {
      tools: [{ googleMaps: {} }],
      toolConfig: {
        retrievalConfig: {
          latLng: {
            latitude: userLat,
            longitude: userLng,
          },
        },
      },
      systemInstruction:
        "You are SpaceMakers Local Geography & Trade Hub Specialist. Guide TVET graduates, artisans, and employers to vocational training centers, trade testing venues (NITA), hardware stores, electrical supply depots, construction material yards, and job hubs across Nairobi and surrounding regions in Kenya. Provide exact names and location directions.",
    };

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: query,
      config,
    });

    const text = response.text || "No place information found.";
    const rawChunks =
      response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    // Extract all map places and review snippets as strictly required by the skill
    const places = [];
    for (const chunk of rawChunks) {
      if (chunk.maps) {
        places.push({
          title: chunk.maps.title || "View location on Google Maps",
          url: chunk.maps.uri || null,
          placeAnswerSources: chunk.maps.placeAnswerSources || null,
        });
      }
    }

    return NextResponse.json({
      text,
      places,
      modelUsed: "gemini-3.5-flash",
    });
  } catch (error) {
    console.error("[Gemini Maps Grounding Error]:", error);
    return NextResponse.json(
      {
        error:
          error.message ||
          "Failed to fetch maps-grounded location data with Gemini.",
      },
      { status: 500 }
    );
  }
}
