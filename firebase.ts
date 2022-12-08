// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuLJH73esPFsh9hOEfkdU3uh_vPRbeoB4",
  authDomain: "netflix-clone-f5a89.firebaseapp.com",
  projectId: "netflix-clone-f5a89",
  storageBucket: "netflix-clone-f5a89.appspot.com",
  messagingSenderId: "197288114998",
  appId: "1:197288114998:web:82114ee904d9381ef25197",
  measurementId: "G-1KV8BEQMP2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
