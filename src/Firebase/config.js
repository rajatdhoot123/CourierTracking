import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBt_kBEm9iBA8A6YLuLakk1nA7PzQkXEGY",
  authDomain: "couriertrackingapp.firebaseapp.com",
  databaseURL: "https://couriertrackingapp.firebaseio.com",
  projectId: "couriertrackingapp",
  storageBucket: "couriertrackingapp.appspot.com",
  messagingSenderId: "893280570160"
};
firebase.initializeApp(config);

export const firebaseSignup = (email, password) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => console.log(data, "Data"))
    .catch(error => console.log(error));


export const firebaseLogin = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

export const firebaseSignOut = () => firebase.auth().signOut().then(() => {
     
    }).catch(error => {
          console.log(error,"error")
    });
