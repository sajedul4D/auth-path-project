// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLo1XJjHZHMLyKYwcx0IS0neFLGHglPB4",
  authDomain: "auth-path-project.firebaseapp.com",
  projectId: "auth-path-project",
  storageBucket: "auth-path-project.appspot.com",
  messagingSenderId: "806386892248",
  appId: "1:806386892248:web:c18442036cf20da34586ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;