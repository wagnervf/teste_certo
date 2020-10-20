// Config file
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBU9xGRxje7QSf2BzRErbNfRwDPCMlxMbY",
  authDomain: "olugarcerto-6aefb.firebaseapp.com",
  databaseURL: "https://olugarcerto-6aefb.firebaseio.com",
  projectId: "olugarcerto-6aefb",
  storageBucket: "olugarcerto-6aefb.appspot.com",
  messagingSenderId: "186006302647",
  appId: "1:186006302647:web:6aa1138587c4558bf30232",
  measurementId: "G-FBZ12QB448"
};
// Initialize Firebase
//firebase.analytics();
let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb }

