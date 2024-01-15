// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDybVq4wnmip69PUCeHKkxatJRRp07A_8k",
    authDomain: "tmdb-test-376d2.firebaseapp.com",
    projectId: "tmdb-test-376d2",
    storageBucket: "tmdb-test-376d2.appspot.com",
    messagingSenderId: "58898338510",
    appId: "1:58898338510:web:794dfb372d499937c7769f",
    measurementId: "G-8YGT05G65W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app);
export const db = getFirestore(app);
export const likeRef = collection(db, 'likeRef');
export const dislikeRef = collection(db, 'dislikeRef');