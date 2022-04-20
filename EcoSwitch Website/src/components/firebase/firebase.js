import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";

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
const app = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = firebase.auth(app);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signOut = () => auth.signOut();