import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDNwadMpbwbd5tnIVQCXuXxXszTIjtciD0",
  authDomain: "escuelasapi-d6a2f.firebaseapp.com",
  projectId: "escuelasapi-d6a2f",
  storageBucket: "escuelasapi-d6a2f.firebasestorage.app",
  messagingSenderId: "975635895907",
  appId: "1:975635895907:web:3f77e463eeac379e350a56",
  measurementId: "G-7R5X64XPLY"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };