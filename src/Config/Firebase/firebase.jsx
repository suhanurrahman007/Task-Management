// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD95DCrEXWJuia2AFWQIpDDsdXDwFm1I_Q",
  authDomain: "task-management-cc751.firebaseapp.com",
  projectId: "task-management-cc751",
  storageBucket: "task-management-cc751.appspot.com",
  messagingSenderId: "468164580210",
  appId: "1:468164580210:web:128d61c1a0a4dc4e7243eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
