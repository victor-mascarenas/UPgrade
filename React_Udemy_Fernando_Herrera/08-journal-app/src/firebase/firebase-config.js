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
const firebaseTestingConfig = {
    apiKey: "AIzaSyByHsrOsn3dbUnOYalCr0i7M-RBTVBereU",
    authDomain: "react-fernando-herrera-demo.firebaseapp.com",
    projectId: "react-fernando-herrera-demo",
    storageBucket: "react-fernando-herrera-demo.appspot.com",
    messagingSenderId: "298756334555",
    appId: "1:298756334555:web:9b671b86be24a8ec243dfe"
};

if (process.env.NODE_ENV === 'test') {
    firebase.initializeApp(firebaseTestingConfig);
} else {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider, 
    firebase
};