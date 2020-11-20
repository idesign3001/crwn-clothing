import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBG2lvjn7mdLFqW9cd8Si2Et1sy-G7RIYs",
    authDomain: "crown-db-179bc.firebaseapp.com",
    databaseURL: "https://crown-db-179bc.firebaseio.com",
    projectId: "crown-db-179bc",
    storageBucket: "crown-db-179bc.appspot.com",
    messagingSenderId: "894864390586",
    appId: "1:894864390586:web:628927404080f3fe640583",
    measurementId: "G-62N0QLK6D3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
