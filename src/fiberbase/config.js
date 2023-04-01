import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIQYTr1CXUrG6KibavgaYKg-l3bBWZX8o",
  authDomain: "onlinegsm-3d8b7.firebaseapp.com",
  projectId: "onlinegsm-3d8b7",
  storageBucket: "onlinegsm-3d8b7.appspot.com",
  messagingSenderId: "943701519620",
  appId: "1:943701519620:web:9e15ea3c7a1114c5867451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app) 