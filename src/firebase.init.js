// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOWJjgCtxVkMaMr029zGsqnHtAJeVjoJ4",
  authDomain: "independent-service-prvider.firebaseapp.com",
  databaseURL: "https://independent-service-prvider-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "independent-service-prvider",
  storageBucket: "independent-service-prvider.appspot.com",
  messagingSenderId: "303815364827",
  appId: "1:303815364827:web:78db489d9ab2c1b61f7cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;