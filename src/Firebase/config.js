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

export const firebaseLogin = (email, password) => firebase.auth()
                                                  .createUserWithEmailAndPassword(email, password)
                                                  .then(data => console.log(data,"Data"))
                                                  .catch(error => console.log(error));