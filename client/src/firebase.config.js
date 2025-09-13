// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-mart-2220e.firebaseapp.com",
  projectId: "e-mart-2220e",
  storageBucket: "e-mart-2220e.firebasestorage.app",
  messagingSenderId: "417339959395",
  appId: "1:417339959395:web:09fd7638b54374e91cf056",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
