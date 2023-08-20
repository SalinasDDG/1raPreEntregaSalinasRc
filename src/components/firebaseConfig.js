// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpz2cOqvVZWIxsMv73czl8f-0ZNpwRv8I",
  authDomain: "coderhouse-ecomercesalinas.firebaseapp.com",
  projectId: "coderhouse-ecomercesalinas",
  storageBucket: "coderhouse-ecomercesalinas.appspot.com",
  messagingSenderId: "501367281420",
  appId: "1:501367281420:web:1232059169a5d4f1171b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)