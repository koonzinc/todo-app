// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFe3YDyhigyuXq6WGo1x-b_xEvzoVKiUM",
  authDomain: "todo-app-5591e.firebaseapp.com",
  projectId: "todo-app-5591e",
  storageBucket: "todo-app-5591e.appspot.com",
  messagingSenderId: "443776774888",
  appId: "1:443776774888:web:ae86b7ee4e34bf35760f5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)