// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm7hP4iTd5GUJN1qLHUgHmK_j77fH6Yvs",
  authDomain: "netflixgpt-a86ff.firebaseapp.com",
  projectId: "netflixgpt-a86ff",
  storageBucket: "netflixgpt-a86ff.appspot.com",
  messagingSenderId: "435383945492",
  appId: "1:435383945492:web:2a77c0b310dad58ff19a01",
  measurementId: "G-7S5R0PSBEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();