// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF2mDDLJCSAj-0RISNk0bl7XfGsapUTjc",
  authDomain: "netflix-gpt-8e26a.firebaseapp.com",
  projectId: "netflix-gpt- 8e26a",
  storageBucket: "netflix-gpt-8e26a.firebasestorage.app",
  messagingSenderId: "1056979893838",
  appId: "1:1056979893838:web:07afdaa0fa7ac5b669cd1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// npm install -g firebase-toolsy

// firebase login
// firebase init
