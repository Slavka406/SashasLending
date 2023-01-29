import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbO0ekNK6k8EU0DAfIhREH-kwoxLO3A8s",
  authDomain: "sashaslending.firebaseapp.com",
  projectId: "sashaslending",
  storageBucket: "sashaslending.appspot.com",
  messagingSenderId: "1073554233546",
  appId: "1:1073554233546:web:59b8a3596518e6ab823c33",
  measurementId: "G-ZK6DGT3005",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
