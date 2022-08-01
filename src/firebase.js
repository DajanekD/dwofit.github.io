// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9bd2hHDA4KkpXD5cbveRc-eZAYJHCauo",
  authDomain: "fir-auth-fd0bf.firebaseapp.com",
  projectId: "fir-auth-fd0bf",
  storageBucket: "fir-auth-fd0bf.appspot.com",
  messagingSenderId: "861658108192",
  appId: "1:861658108192:web:75257c8e994acd01d8c745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
