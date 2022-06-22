// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsrPcfeXedemwkQOTeXsOvzgWMergp8Fg",
  authDomain: "buyall-99fab.firebaseapp.com",
  projectId: "buyall-99fab",
  storageBucket: "buyall-99fab.appspot.com",
  messagingSenderId: "970988133974",
  appId: "1:970988133974:web:2d1695b09b6e3d8d35a5f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db=getFirestore(app);
export default db