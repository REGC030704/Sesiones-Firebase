import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYKn3XpscVOkRq0mfDymgNp_TO6N5Pk1g",
  authDomain: "web40-1c30c.firebaseapp.com",
  projectId: "web40-1c30c",
  storageBucket: "web40-1c30c.appspot.com",
  messagingSenderId: "979484207009",
  appId: "1:979484207009:web:34534a642785b406ebcde0",
  measurementId: "G-D3DMMM9RWK"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase

var auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut};