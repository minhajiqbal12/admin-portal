// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyCPGks5sVSDF4yvmYTTRZ-K7l4FwPs9g08",
    authDomain: "final-hackathon-70b35.firebaseapp.com",
    projectId: "final-hackathon-70b35",
    storageBucket: "final-hackathon-70b35.appspot.com",
    messagingSenderId: "768430252921",
    appId: "1:768430252921:web:e56783f5029254399805a8",
    measurementId: "G-QGLDTRFQLT"
 };


 const app = initializeApp(firebaseConfig);

// AUTH
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
};