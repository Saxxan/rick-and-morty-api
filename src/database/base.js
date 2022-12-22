import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ6tfu_oJ22523oobVvlIil3lQennjpcI",
  authDomain: "rick-y-morty-api-ae1b7.firebaseapp.com",
  databaseURL:
    "https://rick-y-morty-api-ae1b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rick-y-morty-api-ae1b7",
  storageBucket: "rick-y-morty-api-ae1b7.appspot.com",
  messagingSenderId: "208041684686",
  appId: "1:208041684686:web:d729980a024e6b4ef8aa9f",
  measurementId: "G-WB2WSC13DZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
