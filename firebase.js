// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIk05OayJZeeW2A2IUz6xEtvO5JAg99bE",
  authDomain: "nanaakwasi-8d50e.firebaseapp.com",
  projectId: "nanaakwasi-8d50e",
  storageBucket: "nanaakwasi-8d50e.appspot.com",
  messagingSenderId: "785573391399",
  appId: "1:785573391399:web:b9ccdbd89a68b512acf202",
  measurementId: "G-NZTZFLNB21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);