// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAurWFu94QzzOxS9ejcobyq8ubWb0inPlU",
  authDomain: "se-chatbot-73ead.firebaseapp.com",
  projectId: "se-chatbot-73ead",
  storageBucket: "se-chatbot-73ead.firebasestorage.app",
  messagingSenderId: "318939988070",
  appId: "1:318939988070:web:3a6ee33fb2abe812c7eda7",
  measurementId: "G-DFTBLS5R7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

