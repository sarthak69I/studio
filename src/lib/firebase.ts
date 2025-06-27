// src/lib/firebase.ts
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, setDoc, doc, serverTimestamp, getDoc, type Firestore } from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithRedirect, 
  signOut, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  type Auth, 
  type User 
} from "firebase/auth";
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

export const saveUserToFirestore = async (user: User): Promise<void> => {
  const userRef = doc(db, 'users', user.uid);
  try {
    // Use setDoc with merge: true. This creates the document if it doesn't exist,
    // or updates it if it does. This is a robust "upsert" operation.
    await setDoc(userRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      lastLogin: serverTimestamp(),
    }, { merge: true });

    // To set 'createdAt' only once, we can do a quick check.
    // This is a secondary operation and less likely to fail.
    const docSnap = await getDoc(userRef);
    if (docSnap.exists() && !docSnap.data().createdAt) {
      await setDoc(userRef, { createdAt: serverTimestamp() }, { merge: true });
    }

  } catch (error) {
    console.error("Error saving user to Firestore:", error);
    // Re-throwing the error to be caught by the calling function.
    throw new Error("Could not save user data. Please check Firestore permissions and configuration.");
  }
};


export const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error("Error initiating Google sign-in redirect:", error);
  }
};

export const signUpWithEmail = async (email: string, password: string, displayName: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  if (userCredential.user) {
    await updateProfile(userCredential.user, { displayName });
    await saveUserToFirestore(userCredential.user);
  }
  return userCredential;
};

export const signInWithEmail = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  if (userCredential.user) {
    // The useAuthState hook will handle the UI update, but we can still update lastLogin
     await saveUserToFirestore(userCredential.user);
  }
  return userCredential;
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export { app, db, auth };
