import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAms6p5H-1RcvbqUgyXmifmhdoO1A6G_Pg",
  authDomain: "react-app-journal-48f05.firebaseapp.com",
  projectId: "react-app-journal-48f05",
  storageBucket: "react-app-journal-48f05.appspot.com",
  messagingSenderId: "293089929408",
  appId: "1:293089929408:web:604f078bc8c87b668aa525"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}