// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHpPJW1LPIwBQT-VXHA2zVkfgsI3D0LhA",
  authDomain: "ai-minerz.firebaseapp.com",
  projectId: "ai-minerz",
  storageBucket: "ai-minerz.firebasestorage.app",
  messagingSenderId: "957312128940",
  appId: "1:957312128940:web:4ef33a62d5fe71f7e04c09",
  measurementId: "G-EQ3C61NTGC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
