import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWvTZMUDQ5cBSWNF19p7fRLNyueV5CiPo",
    authDomain: "todo-app-bbc0b.firebaseapp.com",
    databaseURL: "https://todo-app-bbc0b.firebaseio.com",
    projectId: "todo-app-bbc0b",
    storageBucket: "todo-app-bbc0b.appspot.com",
    messagingSenderId: "90570767107",
    appId: "1:90570767107:web:b71d27467bad5b530c8736",
    measurementId: "G-MECCN0SRRM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;