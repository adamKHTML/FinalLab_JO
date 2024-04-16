// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbQpZl2iw2tzABnwNqW6Y2HkuUhjlOh-0",
    authDomain: "swair-d559f.firebaseapp.com",
    projectId: "swair-d559f",
    storageBucket: "swair-d559f.appspot.com",
    messagingSenderId: "269244390222",
    appId: "1:269244390222:web:68bf027fe463fb5b11dc1f",
    measurementId: "G-RFC2FWQTWF"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);