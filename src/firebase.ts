import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy7GJE_t5l-To0GuuyJ7Bf1chH0uRCky4",
  authDomain: "users-petbrait.firebaseapp.com",
  projectId: "users-petbrait",
  storageBucket: "users-petbrait.appspot.com",
  messagingSenderId: "919302857760",
  appId: "1:919302857760:web:4269d0ae01e8e18f66c845",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth, firebaseApp };
