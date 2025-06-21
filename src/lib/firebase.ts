// src/lib/firebase.ts
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, setDoc, doc, serverTimestamp, getDoc, type Firestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut, type Auth, type User } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHdIfzMXstsyv2OG9ewPLTxceFIW7-rjA",
  authDomain: "e-leak-3sed1.firebaseapp.com",
  projectId: "e-leak-3sed1",
  storageBucket: "e-leak-3sed1.appspot.com", 
  messagingSenderId: "989355921943",
  appId: "1:989355921943:web:da5854f22d8965c0140252",
  measurementId: "G-SLH88GT2PZ"
};

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize App Check
if (typeof window !== 'undefined') {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6Lfg6WgrAAAAAPK83a_ApBr48YtFVVimC2CqvhCd'),
    isTokenAutoRefreshEnabled: true
  });
}


db = getFirestore(app);
auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const saveUserToFirestore = async (user: User): Promise<boolean> => {
  const userRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    // User is new, create a new document
    await setDoc(userRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
    });
    return true; // Indicates a new user was created
  } else {
    // User exists, update last login time
    await setDoc(userRef, { lastLogin: serverTimestamp() }, { merge: true });
    return false; // Indicates an existing user logged in
  }
};

export const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error("Error initiating Google sign-in redirect:", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export { app, db, auth };
