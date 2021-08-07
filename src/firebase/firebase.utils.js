import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyACF3APos5_Y6TJpHsbHIbRAUZCFZLHEoQ",
  authDomain: "fashion-clothing-z.firebaseapp.com",
  projectId: "fashion-clothing-z",
  storageBucket: "fashion-clothing-z.appspot.com",
  messagingSenderId: "835085303201",
  appId: "1:835085303201:web:167636627b9cf69ef29fe0",
  measurementId: "G-X2YBS17BB6",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
