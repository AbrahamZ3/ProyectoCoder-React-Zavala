// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDabj5HsQZ-9S7FHIjdhTnOCr_JVXqItJk",
    authDomain: "proyecto-coder-fa0a7.firebaseapp.com",
    projectId: "proyecto-coder-fa0a7",
    storageBucket: "proyecto-coder-fa0a7.appspot.com",
    messagingSenderId: "1022929652879",
    appId: "1:1022929652879:web:6a94f0ef3cfc25902734fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);