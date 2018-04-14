import * as firebase from "firebase";
import { config } from "./config";
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

let providerGoogle = new firebase.auth.GoogleAuthProvider();
export const googleLogin = () => firebase.auth().signInWithPopup(providerGoogle).then((result) => {
  let token = result.credential.accessToken;
  let user = result.user;
}).catch(function (error) {
  console.log(error)
  let errorCode = error.code;
  let errorMessage = error.message;
  let email = error.email;
  let credential = error.credential;
});