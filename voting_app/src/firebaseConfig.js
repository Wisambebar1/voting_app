import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC0JpYwcxB1zsDt1JDHDMJC6bJtL-FxE-8",
  authDomain: "voting-app-289a4.firebaseapp.com",
  projectId: "voting-app-289a4",
  storageBucket: "voting-app-289a4.firebasestorage.app",
  messagingSenderId: "99916970021",
  appId: "1:99916970021:web:a1238917f49e7b523aa7cc"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db};