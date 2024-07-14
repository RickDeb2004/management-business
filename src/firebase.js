// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtEgC-RFu_FHZK-jGLJqvjVHXxK181dD8",
  authDomain: "copy-41337.firebaseapp.com",
  databaseURL: "https://copy-41337-default-rtdb.firebaseio.com/",
  projectId: "copy-41337",
  storageBucket: "copy-41337.appspot.com",
  messagingSenderId: "51667952565",
  appId: "1:51667952565:web:6a70cb900040dad3c6effc",
  measurementId: "G-V3KBTV8R42"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, analytics, auth, database };
