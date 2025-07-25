// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXZVqor54rdyDj7yzjdEprQPPqbKZzGfg",
  authDomain: "thestudentspot-9810.firebaseapp.com",
  projectId: "thestudentspot-9810",
  storageBucket: "thestudentspot-9810.appspot.com",
  messagingSenderId: "987074570093",
  appId: "1:987074570093:web:07708270c5319b8d371c64",
  measurementId: "G-WB2X0ZMENB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
