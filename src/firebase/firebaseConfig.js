import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

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

const rdb = getDatabase(app);
const db = getFirestore();

export { db, rdb };

