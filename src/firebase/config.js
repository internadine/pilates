// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzFcTYz5ERAb0eecDiHEBNavkmgYEBgUk",
    authDomain: "pilates-3739c.firebaseapp.com",
    projectId: "pilates-3739c",
    storageBucket: "pilates-3739c.appspot.com",
    messagingSenderId: "268011019984",
    appId: "1:268011019984:web:8d5150662121e32b6ec8d5",
    measurementId: "G-4T12C5NLGV"
  };

// init firebase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, timestamp, projectAuth}