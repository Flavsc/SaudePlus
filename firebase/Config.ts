// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithCredential,
    signInWithPopup
} from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAxq6loMdKZ8vq2fDm0E2zm-p-yETE9HI",
    authDomain: "saudeplus-e2d85.firebaseapp.com",
    databaseURL: "https://saudeplus-e2d85-default-rtdb.firebaseio.com",
    projectId: "saudeplus-e2d85",
    storageBucket: "saudeplus-e2d85.appspot.com",
    messagingSenderId: "411561318029",
    appId: "1:411561318029:web:3c713a65a30134ad5b74c4",
    measurementId: "G-KG20TW1DLV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
