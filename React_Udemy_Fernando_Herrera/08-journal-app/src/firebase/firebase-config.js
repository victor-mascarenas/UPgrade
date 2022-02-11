import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTmXkHgRSXUMJlK5oiz14LbjHS2i5XHyU",
    authDomain: "react-fernando-herrera-e248c.firebaseapp.com",
    projectId: "react-fernando-herrera-e248c",
    storageBucket: "react-fernando-herrera-e248c.appspot.com",
    messagingSenderId: "969877029361",
    appId: "1:969877029361:web:deb00cdc6f7ecced42c450"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider, 
    firebase
};