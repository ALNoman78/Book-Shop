// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDopmJeAB5UtUFoq6U-YJXL9wSFypiJQTI",
    authDomain: "book-shop-firebase.firebaseapp.com",
    projectId: "book-shop-firebase",
    storageBucket: "book-shop-firebase.firebasestorage.app",
    messagingSenderId: "707055186355",
    appId: "1:707055186355:web:0ed0e16b9d08c7a2039bc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
