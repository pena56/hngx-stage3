// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuvTAOsAPY-mpPV6A4526EKCBZ_HgLjZc",
  authDomain: "gallery-c5155.firebaseapp.com",
  projectId: "gallery-c5155",
  storageBucket: "gallery-c5155.appspot.com",
  messagingSenderId: "679780536597",
  appId: "1:679780536597:web:19c82157f6da2c9cab191c",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
