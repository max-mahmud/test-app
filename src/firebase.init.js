import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhn-E027b0sgp9WjqZzMDA_Qv6nfYrF7g",
  authDomain: "try-first-a3cc8.firebaseapp.com",
  projectId: "try-first-a3cc8",
  storageBucket: "try-first-a3cc8.appspot.com",
  messagingSenderId: "156673201819",
  appId: "1:156673201819:web:dd03739ba56f353700983e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth