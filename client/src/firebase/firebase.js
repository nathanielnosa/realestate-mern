// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-realestate1.firebaseapp.com",
  projectId: "mern-realestate1",
  storageBucket: "mern-realestate1.appspot.com",
  messagingSenderId: "535108427242",
  appId: "1:535108427242:web:7b3b1600742f3b78d5a693"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);