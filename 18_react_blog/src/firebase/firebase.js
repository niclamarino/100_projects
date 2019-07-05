import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAE_L45Sd1nQNpYCzOXxdRgqjFKeWR1Frc",
    authDomain: "react-blog-c01ea.firebaseapp.com",
    databaseURL: "https://react-blog-c01ea.firebaseio.com",
    projectId: "react-blog-c01ea",
    storageBucket: "",
    messagingSenderId: "197292733580",
    appId: "1:197292733580:web:15c47e3d69d77960"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };