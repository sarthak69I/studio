
// src/lib/firebase.ts
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, setDoc, doc, serverTimestamp, getDoc, updateDoc, type Firestore, Timestamp } from "firebase/firestore";
import { 
  getAuth, 
  signOut, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  type Auth, 
  type User,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword
} from "firebase/auth";
// Removed Firebase Storage imports as they are no longer needed
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import type { UserData } from "@/context/AuthContext";

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
        bio: "",
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

export const updateUserProfile = async (user: User, updates: Partial<UserData>) => {
  if (!user) throw new Error("User not authenticated");

  // 1. Update Firebase Auth profile if displayName is being changed
  if (updates.displayName && updates.displayName !== user.displayName) {
    await updateProfile(user, { displayName: updates.displayName });
  }

  // 2. Update Firestore user document with all provided updates
  const userRef = doc(db, 'users', user.uid);
  const firestoreUpdates: { [key: string]: any } = {};
  if (updates.displayName !== undefined) firestoreUpdates.displayName = updates.displayName;
  if (updates.photoURL !== undefined) firestoreUpdates.photoURL = updates.photoURL;
  if (updates.bio !== undefined) firestoreUpdates.bio = updates.bio;

  if (Object.keys(firestoreUpdates).length > 0) {
    await updateDoc(userRef, firestoreUpdates);
  }
};

export const reauthenticateAndChangePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
  const user = auth.currentUser;
  if (!user || !user.email) {
    throw new Error("User not found or email is missing.");
  }

  // Get credential from the user's current password.
  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  // Re-authenticate the user with the credential
  await reauthenticateWithCredential(user, credential);

  // If re-authentication is successful, update the password
  await updatePassword(user, newPassword);
};


export { app, db, auth };
