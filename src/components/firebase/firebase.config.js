// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfIaVNixgzSWHd6hN1jUofV5D6-W1_lKY",
  authDomain: "cozynest-7b9c3.firebaseapp.com",
  projectId: "cozynest-7b9c3",
  storageBucket: "cozynest-7b9c3.appspot.com",
  messagingSenderId: "503590901470",
  appId: "1:503590901470:web:d034c54cb65acf20b8544f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;