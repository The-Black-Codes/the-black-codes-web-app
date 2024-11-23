// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { config } from 'dotenv';

config({ path: './env.local' });
const { API_KEY } = process.env;

// export const firebaseConfig = {
  //   apiKey: 'AIzaSyAKQHPszgKMgUneckhujEfztZOyGGqQj_w',
  //   authDomain: 'temp-database-619aa.firebaseapp.com',
  //   projectId: 'temp-database-619aa',
  //   storageBucket: 'temp-database-619aa.firebasestorage.app',
  //   messagingSenderId: '1047219556917',
  //   appId: '1:1047219556917:web:f0aedfc4f8dd81e35a977c',
  // };
  
  // Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAlWeO4AWXlKnQ-jQtw3vDFbWwlGV2l_1w",
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