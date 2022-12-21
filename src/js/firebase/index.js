import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIRESTORE,
  authDomain: "jscheatsheet.firebaseapp.com",
  projectId: "jscheatsheet",
  storageBucket: "jscheatsheet.appspot.com",
  messagingSenderId: "484123471056",
  appId: "1:484123471056:web:724b181d15ca52201302d5",
  measurementId: "G-ERJ50TTH75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
