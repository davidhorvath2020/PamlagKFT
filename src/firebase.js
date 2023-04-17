// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMolGIXGzVkpW5iA11h4ChjyEOIJQBg7w",
  authDomain: "pamlag-kft.firebaseapp.com",
  projectId: "pamlag-kft",
  storageBucket: "pamlag-kft.appspot.com",
  messagingSenderId: "644802287406",
  appId: "1:644802287406:web:e1ed7f6fae61f1abfeccbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();