// src/firebase/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAurWFu94QzzOxS9ejcobyq8ubWb0inPlU",
  authDomain: "se-chatbot-73ead.firebaseapp.com",
  projectId: "se-chatbot-73ead",
  storageBucket: "se-chatbot-73ead.appspot.com", // Fixed typo in storageBucket URL
  messagingSenderId: "318939988070",
  appId: "1:318939988070:web:3a6ee33fb2abe812c7eda7",
  measurementId: "G-DFTBLS5R7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase App Initialized:", app);

// Export auth and db
export { auth, db };
