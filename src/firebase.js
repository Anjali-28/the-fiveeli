import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBvE7bSqvyaKSockhMM_TL7Xor9IBBaA2A",
  authDomain: "the-5-eli.firebaseapp.com",
  databaseURL: "https://the-5-eli.firebaseio.com",
  projectId: "the-5-eli",
  storageBucket: "the-5-eli.appspot.com",
  messagingSenderId: "257535141970",
  appId: "1:257535141970:web:25178eadd561668c01d78b",
  measurementId: "G-PM61YSWHN8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database;