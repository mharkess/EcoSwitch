import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC5Ih6gZI--d9e52hdAr9Jo4ttxR_yi9jw",
    authDomain: "ecoswitch-auth-e1ad6.firebaseapp.com",
    projectId: "ecoswitch-auth-e1ad6",
    storageBucket: "ecoswitch-auth-e1ad6.appspot.com",
    messagingSenderId: "697521235413",
    appId: "1:697521235413:web:1d0b3da74a2dd1a8c3095c",
    measurementId: "G-N938QZ6DRT"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);