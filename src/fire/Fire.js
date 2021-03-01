// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Configuration from Firebase admin console
const firebaseConfig = {
  apiKey: "AIzaSyAxFXU07_Qkb8z6NbgOUwwD6ImNtURjX1c",
  authDomain: "mustang-messenger-41f23.firebaseapp.com",
  projectId: "mustang-messenger-41f23",
  storageBucket: "mustang-messenger-41f23.appspot.com",
  messagingSenderId: "195537124874",
  appId: "1:195537124874:web:3f3a8cb5da2e739390e9f3"
};

try {
  firebase.initializeApp(firebaseConfig); }
catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
const db = fire.firestore();


export {fire, db};