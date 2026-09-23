import { defineConfig } from "@neon/config/v1";

export default defineConfig({
  functions: {
    livevoice: {
      name: "Gemini Live Voice Bridge",
      source: "live/index.mjs",
      env: {
        GEMINI_API_KEY: process.env.GEMINI_API_KEY!,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID!,
      },
    },
  },
});