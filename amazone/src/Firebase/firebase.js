import firebase from  "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDs9-gxuSkToU4jJYlQ8OzrbbJjFPLFClw",
    authDomain: "e-clone-79f4c.firebaseapp.com",
    databaseURL: "https://e-clone-79f4c.firebaseio.com",
    projectId: "e-clone-79f4c",
    storageBucket: "e-clone-79f4c.appspot.com",
    messagingSenderId: "756933429009",
    appId: "1:756933429009:web:a87dd61a60fa981a8eaeb0",
    measurementId: "G-LEHH61EZE7"
});

const auth = firebase.auth();

export { auth };