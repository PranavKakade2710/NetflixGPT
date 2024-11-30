// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBGgvDuiLkNyli1CX2q6YUJHuXmM7T78I",
  authDomain: "netflixgpt-e5c53.firebaseapp.com",
  projectId: "netflixgpt-e5c53",
  storageBucket: "netflixgpt-e5c53.firebasestorage.app",
  messagingSenderId: "202199752820",
  appId: "1:202199752820:web:d5cdb782ff11ed09723121",
  measurementId: "G-4BN9CHZ8WV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
