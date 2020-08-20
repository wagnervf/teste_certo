// Config file
import * as firebases from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD_Xin2UhstFacQ_yjqHoFFoVtZ9T_W1ME",
  authDomain: "smartchat-8db51.firebaseapp.com",
  databaseURL: "https://smartchat-8db51.firebaseio.com",
  projectId: "smartchat-8db51",
  storageBucket: "smartchat-8db51.appspot.com",
  messagingSenderId: "118267131433",
  appId: "1:118267131433:web:a60d05cad52c16e000ce38"
};
// Initialize Firebase
firebases.initializeApp(firebaseConfig);
//let firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
let firebaseAuth = firebases.auth();
let firebaseDb = firebases.database();

export { firebaseAuth, firebaseDb }