import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAV99_NlhCrPYIV8nkFr0N23qlfIBTH10A",
  authDomain: "studentspot-1b841.firebaseapp.com",
  projectId: "studentspot-1b841",
  storageBucket: "studentspot-1b841.firebasestorage.app",
  messagingSenderId: "341218548796",
  appId: "1:341218548796:web:1fc35fd4f6971d048cb739"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
