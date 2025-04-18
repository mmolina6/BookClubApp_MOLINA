import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'; // For Cloud Functions


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaOAt38_RWrNnju0sYBh98zIaWbyFmEV0",
  authDomain: "bookclubapp-7c4ac.firebaseapp.com",
  projectId: "bookclubapp-7c4ac",
  storageBucket: "bookclubapp-7c4ac.firebasestorage.app",
  messagingSenderId: "924892205934",
  appId: "1:924892205934:web:e3b27d8716f4a417df277f"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const functions = getFunctions(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);