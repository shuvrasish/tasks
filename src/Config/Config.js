import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAGZVKQTPq-viYNl7yISrz3rire2NcHMU4",
    authDomain: "tasks-2775e.firebaseapp.com",
    projectId: "tasks-2775e",
    storageBucket: "tasks-2775e.appspot.com",
    messagingSenderId: "666410403597",
    appId: "1:666410403597:web:61d6b1476048492a5ad244"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };