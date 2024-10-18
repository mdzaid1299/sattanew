// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA65de3awFLaPHFfoNIm_WOqSpcuFFcN88",
  authDomain: "simplelogin-59faf.firebaseapp.com",
  projectId: "simplelogin-59faf",
  storageBucket: "simplelogin-59faf.appspot.com",
  messagingSenderId: "1009798987039",
  appId: "1:1009798987039:web:e1efa43ca684c9e6d1842a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export authentication modules
const auth = getAuth(app);


export { auth, signInWithEmailAndPassword, signInWithPopup, signOut };