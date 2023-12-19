import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8_jF87zU_75ZVN6g3m75Gz_3ngPuHVo4",
  authDomain: "reactnative-adef7.firebaseapp.com",
  projectId: "reactnative-adef7",
  storageBucket: "reactnative-adef7.appspot.com",
  messagingSenderId: "464991519915",
  appId: "1:464991519915:web:7032d5bbd6fbd77dcde3ee",
  measurementId: "G-S87PLTGMDB"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
};
