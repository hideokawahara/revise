import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKWvH8t9e7VGFozIhWkmSVdKkwKcFGgE4",
  authDomain: "revise-3c0e3.firebaseapp.com",
  databaseURL: "https://revise-3c0e3.firebaseio.com",
  projectId: "revise-3c0e3",
  storageBucket: "revise-3c0e3.appspot.com",
  messagingSenderId: "146342325425",
  appId: "1:146342325425:web:0d75af215499f87dd30690",
  measurementId: "G-MLCRVPZCP0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;