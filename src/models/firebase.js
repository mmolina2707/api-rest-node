// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjBTLsKiCb5fqNPy9_vHyJhhQcsfOZK-k",
  authDomain: "api-rest-node-1c049.firebaseapp.com",
  projectId: "api-rest-node-1c049",
  storageBucket: "api-rest-node-1c049.firebasestorage.app",
  messagingSenderId: "329554448890",
  appId: "1:329554448890:web:f26ab4190acb6a9e4e9443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

