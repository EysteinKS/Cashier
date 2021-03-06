import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA67suV53FzqISeySMg27iXVcmyVtZV1ZI",
  authDomain: "oppgjor-9b81a.firebaseapp.com",
  databaseURL: "https://oppgjor-9b81a.firebaseio.com",
  projectId: "oppgjor-9b81a",
  storageBucket: "oppgjor-9b81a.appspot.com",
  messagingSenderId: "322242797475"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  }
  

const firestore = firebase.firestore();
const db = firebase.database();
const auth = firebase.auth();

export {
  firestore,
  db,
  auth,
}