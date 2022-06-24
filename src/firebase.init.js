// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-JSEB8tcJI9KgJs1PJ0qNVMkmDcv1enc",
  authDomain: "ecommerce-1ccbc.firebaseapp.com",
  projectId: "ecommerce-1ccbc",
  storageBucket: "ecommerce-1ccbc.appspot.com",
  messagingSenderId: "171570347833",
  appId: "1:171570347833:web:1209ba4c64e7dfcb62b2e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;