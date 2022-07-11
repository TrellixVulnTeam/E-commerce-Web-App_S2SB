import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk4VpOS32g0B0-_2v0x58RK34wMDx4yRY",
  authDomain: "e-commerce-web-app-65227.firebaseapp.com",
  projectId: "e-commerce-web-app-65227",
  storageBucket: "e-commerce-web-app-65227.appspot.com",
  messagingSenderId: "614437600917",
  appId: "1:614437600917:web:3944ae2e8f8bd3ed8da59c",
};

const firebaseApp = initializeApp(firebaseConfig);

// Sing in with google
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Adding users to db
const db = getFirestore();

export const creatUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userRefDoc = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userRefDoc);

  // if user dosn't exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRefDoc, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.error("err msg: ", err.message);
    }
  }

  return userRefDoc;
};

// Sing in with email and password

export const createAuthUserWhitEmailAndPwd = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SingInAuthUserWhitEmailAndPwd = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Sing Out
export const SingOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
