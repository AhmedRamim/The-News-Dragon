// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7TRX6-HZw347IMWrZOBeMJuz4xk7l3sI",
  authDomain: "the-news-dragon-af7da.firebaseapp.com",
  projectId: "the-news-dragon-af7da",
  storageBucket: "the-news-dragon-af7da.appspot.com",
  messagingSenderId: "955033423107",
  appId: "1:955033423107:web:6dc091e2e637d5f6422d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;