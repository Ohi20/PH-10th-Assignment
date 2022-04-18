// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_ViAsn2_u3ldYragvXyW71a3qvm3pEo",
  authDomain: "independent-service-prov-67acd.firebaseapp.com",
  projectId: "independent-service-prov-67acd",
  storageBucket: "independent-service-prov-67acd.appspot.com",
  messagingSenderId: "613918725715",
  appId: "1:613918725715:web:a7329a65d70ac9c6c898a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;