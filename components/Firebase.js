import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0xcssLIhzNxFaHO2d5k5JUDgP69CrXT0",
    authDomain: "sous-chef1.firebaseapp.com",
    databaseURL: "https://sous-chef1.firebaseio.com",
    projectId: "sous-chef1",
    storageBucket: "sous-chef1.appspot.com",
    messagingSenderId: "888670691685",
    appId: "1:888670691685:web:55892755c7f8ea8c0b418c",
    measurementId: "G-9LKS8ELRYM"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;