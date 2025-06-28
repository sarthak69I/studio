
// src/lib/firebase.ts
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, setDoc, doc, serverTimestamp, getDoc, updateDoc, type Firestore, Timestamp } from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  type Auth, 
  type User 
} from "firebase/auth";
// Removed Firebase Storage imports as they are no longer needed
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
// let storage: FirebaseStorage; // storage is no longer needed

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
// storage = getStorage(app); // storage is no longer needed

const googleProvider = new GoogleAuthProvider();

export const saveUserToFirestore = async (user: User): Promise<void> => {
  const userRef = doc(db, 'users', user.uid);
  try {
    const docSnap = await getDoc(userRef);
    
    if (!docSnap.exists()) {
      // Document doesn't exist, create it with all fields
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      });
    } else {
      // Document exists, update only the lastLogin field
      await updateDoc(userRef, {
        lastLogin: serverTimestamp(),
      });
    }
  } catch (error) {
    console.error("Error saving user to Firestore:", error);
    throw new Error("Could not save user data. Please check Firestore permissions and configuration.");
  }
};


export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      await saveUserToFirestore(result.user);
    }
    return result; // return the result to the caller
  } catch (error) {
    console.error("Error during Google sign-in with popup:", error);
    // Re-throw the error so the calling component can handle it
    throw error;
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

// uploadAvatar function is now removed as it's no longer needed.

export const updateUserProfile = async (user: User, newName: string, newPhotoURL: string) => {
  if (!user) throw new Error("User not authenticated");

  // 1. Update Firebase Auth display name only.
  // The photoURL will be stored in Firestore to avoid size limits.
  // We only update if the name has actually changed.
  if (user.displayName !== newName) {
    await updateProfile(user, { displayName: newName });
  }

  // 2. Update Firestore user document with new name and photo
  const userRef = doc(db, 'users', user.uid);
  await updateDoc(userRef, {
    displayName: newName,
    photoURL: newPhotoURL // This can be a long Base64 string
  });
  
  // The local auth state for displayName will update automatically.
  // The photo will be re-read from Firestore where it is displayed.
};


export { app, db, auth };
