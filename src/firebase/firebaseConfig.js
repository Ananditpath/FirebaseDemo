// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyfYM_2ieO_hXmaVaewVEKPmlcgZtIlfY",
  authDomain: "fir-demo-project-9faf6.firebaseapp.com",
  projectId: "fir-demo-project-9faf6",
  storageBucket: "fir-demo-project-9faf6.appspot.com",
  messagingSenderId: "1074707644051",
  appId: "1:1074707644051:web:d1804a6b108916231ad766",
  measurementId: "G-B897YPTDLL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider };
