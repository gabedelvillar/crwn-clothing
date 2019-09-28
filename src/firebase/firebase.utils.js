import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJddsW7zzTE_HOYK7yNEKVkb_Oq_MA6vs",
  authDomain: "crwn-db-8fa90.firebaseapp.com",
  databaseURL: "https://crwn-db-8fa90.firebaseio.com",
  projectId: "crwn-db-8fa90",
  storageBucket: "",
  messagingSenderId: "489343648582",
  appId: "1:489343648582:web:5907732c53015f7b"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promp: "select-account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
