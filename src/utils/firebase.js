// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import{getAuth,createUserWithEmailAndPassword} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-5f154.firebaseapp.com",
  projectId: "netflixgpt-5f154",
  storageBucket: "netflixgpt-5f154.firebasestorage.app",
  messagingSenderId: "479010676478",
  appId: "1:479010676478:web:8d736ca943085034708faf",
  measurementId: "G-FLJHBEL0S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();