import { initializeApp, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
//import { getFirestore } from 'firebase/firestore'
//import { getFunctions } from 'firebase/functions'; 
//import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyDaOAt38_RWrNnju0sYBh98zIaWbyFmEV0",
  authDomain: "bookclubapp-7c4ac.firebaseapp.com",
  projectId: "bookclubapp-7c4ac",
  storageBucket: "bookclubapp-7c4ac.firebasestorage.app",
  messagingSenderId: "924892205934",
  appId: "1:924892205934:web:e3b27d8716f4a417df277f"
};

//const firebase_app = initializeApp(firebaseConfig);
//const firebase_auth = getAuth(firebase_app);

let firebase_app;
try {
  firebase_app = getApp(); 
} catch (e) {
  firebase_app = initializeApp(firebaseConfig); 
}


const firebase_auth = initializeAuth(firebase_app, 
  { 
    persistence: getReactNativePersistence(AsyncStorage)
  }
);
//export const auth = getAuth(firebase_app);
//const firestore_db = getFirestore(firebase_app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

/*
export const functions = getFunctions(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app); */

export {firebase_app}; 
export {firebase_auth};