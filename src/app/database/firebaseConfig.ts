// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { config } from 'dotenv';

config({ path: './env.local' });
const { NX_PUBLIC_API_KEY } = process.env;
  
  // Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: NX_PUBLIC_API_KEY,
  authDomain: "black-codes-website.firebaseapp.com",
  projectId: "black-codes-website",
  storageBucket: "black-codes-website.firebasestorage.app",
  messagingSenderId: "848146041229",
  appId: "1:848146041229:web:7258486626b04fae03d5c4",
  measurementId: "G-RMKHLWGN55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 