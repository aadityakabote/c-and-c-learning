// Firebase configuration
// To enable real Firebase Auth:
// 1. Create a Firebase project at https://console.firebase.google.com/
// 2. Copy your config values into .env.local (see .env.example)
// 3. Uncomment the initializeApp block below

import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Graceful fallback: only init Firebase when config is present
export const firebaseEnabled =
  !!firebaseConfig.apiKey && firebaseConfig.apiKey !== "your_api_key_here";

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

if (firebaseEnabled) {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
}

export { app, auth };
