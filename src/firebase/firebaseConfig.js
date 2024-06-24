// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxgTKliDO4MNop_gZEH_led3kpI2MlfBs",
  authDomain: "first-year-hardware-project.firebaseapp.com",
  projectId: "first-year-hardware-project",
  storageBucket: "first-year-hardware-project.appspot.com",
  messagingSenderId: "651412074531",
  appId: "1:651412074531:web:0ae0de905b0aa0ff5f0196",
  measurementId: "G-M2QY54GRFT",
  databaseURL: "https://first-year-hardware-project-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getDatabase(app);

export { auth, provider, db };
