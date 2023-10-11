import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPNq4EFCX3-RwK9UIQGynjN0eV-YcvqJY",
    authDomain: "site-db21f.firebaseapp.com",
    projectId: "site-db21f",
    storageBucket: "site-db21f.appspot.com",
    messagingSenderId: "208365493826",
    appId: "1:208365493826:web:13cb3e471e167a507a97db",
    measurementId: "G-HRP6SZ7TS8"  
  };
  

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export { db, auth };