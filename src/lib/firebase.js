import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyMockKeyForDevEnvironmentSpaceMakers",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "spacemakers-demo.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "spacemakers-demo",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "spacemakers-demo.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789012:web:mockappid12345",
};

let app = null;
let auth = null;

try {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth(app);
} catch (err) {
  console.warn("[SpaceMakers] Firebase client init error:", err?.message);
}

export { auth };
export default app;
