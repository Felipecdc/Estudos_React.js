/*
* Importação e configuração do banco de dados do Firebase + auth
*/

import { initializeApp } from 'firebase/app'; // Inicia o app ligado ao firebase
import { getFirestore } from 'firebase/firestore'; // Firestore
import { getAuth } from 'firebase/auth'; // Auth

const firebaseConfig = {
    apiKey: "AIzaSyAPNq4EFCX3-RwK9UIQGynjN0eV-YcvqJY",
    authDomain: "site-db21f.firebaseapp.com",
    projectId: "site-db21f",
    storageBucket: "site-db21f.appspot.com",
    messagingSenderId: "208365493826",
    appId: "1:208365493826:web:13cb3e471e167a507a97db",
    measurementId: "G-HRP6SZ7TS8"  
  };
  
  const firebaseapp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseapp) // Configura a inicialização do app com o firestore!
  const auth = getAuth(firebaseapp) // Configura a inicialização do app com a autenticação de user!

  export { db, auth }; // Exportação da config firestore e auth para uso externo!
