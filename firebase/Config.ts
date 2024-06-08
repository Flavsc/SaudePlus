// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    setPersistence,
    signInWithCredential,
    signInWithPopup
} from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import {initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const keyApiFire = process.env.EXPO_PUBLIC_API_FIREBASE
const bucket = process.env.EXPO_PUBLIC_BUCKET_FIREBASE
const urlFirebase = process.env.EXPO_PUBLIC_URL_FIREBASE
const authDomain = process.env.EXPO_PUBLIC_AUTH_DOMAIN


const firebaseConfig = {
    apiKey: keyApiFire,
    authDomain: authDomain,
    databaseURL: urlFirebase,
    projectId: "saudeplus-e2d85",
    storageBucket: bucket,
    messagingSenderId: "411561318029",
    appId: "1:411561318029:web:3c713a65a30134ad5b74c4",
    measurementId: "G-KG20TW1DLV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
