// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzNAq3O4YAxvY29MXrAbsYeM4eotTHmJM",
  authDomain: "react-chat-4c881.firebaseapp.com",
  projectId: "react-chat-4c881",
  storageBucket: "react-chat-4c881.appspot.com",
  messagingSenderId: "704583929336",
  appId: "1:704583929336:web:315fd47b34fec5fa321a0d",
  measurementId: "G-5QWN8CTZMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);