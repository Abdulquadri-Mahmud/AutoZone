// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-site-12c62.firebaseapp.com",
  projectId: "mern-blog-site-12c62",
  storageBucket: "mern-blog-site-12c62.appspot.com",
  messagingSenderId: "365688970566",
  appId: "1:365688970566:web:3184af2c12f09d2d315947"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);