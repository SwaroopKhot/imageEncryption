import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC082hazh7JMdx3PguBId4TQj6HolLkHi4",
  authDomain: "my-moneyflow.firebaseapp.com",
  projectId: "my-moneyflow",
  storageBucket: "my-moneyflow.appspot.com",
  messagingSenderId: "107317419682",
  appId: "1:107317419682:web:0584eec1beac493f3d81fb",
  measurementId: "G-R22KR4QKL6"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app)
const auth = getAuth(app)


export {db, auth}