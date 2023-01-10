// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkmapAtesUfeLnJvoUCjd_ZrW39W21Jvs",
  authDomain: "moviebrain-de468.firebaseapp.com",
  projectId: "moviebrain-de468",
  storageBucket: "moviebrain-de468.appspot.com",
  messagingSenderId: "423062357833",
  appId: "1:423062357833:web:09243b918ff15e5b607c98",
  measurementId: "G-W95KGRZHVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
