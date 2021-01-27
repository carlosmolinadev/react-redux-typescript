import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK626IEyOMSPMZOEODUtBv1op8fSTsICg",
  authDomain: "elasticsearch-39019.firebaseapp.com",
  projectId: "elasticsearch-39019",
  storageBucket: "elasticsearch-39019.appspot.com",
  messagingSenderId: "695025441419",
  appId: "1:695025441419:web:c6734dcbf37b9c3b02528e",
  measurementId: "G-NKQ2R3BGJR",
};

const app = firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const auth = app.auth();
const functions = app.functions();
const timestamp = firebase.firestore.Timestamp;

export { database, auth, functions, timestamp };
