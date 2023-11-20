// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvPZs6wS9fToofIqmPPfrRP_4-UZ8LKc0",
  authDomain: "nainstate-11c3a.firebaseapp.com",
  projectId: "nainstate-11c3a",
  storageBucket: "nainstate-11c3a.appspot.com",
  messagingSenderId: "399783747386",
  appId: "1:399783747386:web:86921afc39c49129beba03",
  measurementId: "G-YNBR5636TL"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);