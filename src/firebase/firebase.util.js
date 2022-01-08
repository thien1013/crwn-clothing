import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4MExBvFLlSOLBmXvyK0T3RwLHWIpCLi8",
  authDomain: "crwn-db-9c4d4.firebaseapp.com",
  projectId: "crwn-db-9c4d4",
  storageBucket: "crwn-db-9c4d4.appspot.com",
  messagingSenderId: "720077568721",
  appId: "1:720077568721:web:01dbb71d1ad2544b3e63f0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
