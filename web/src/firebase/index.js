import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJ-TcKnIH2-yoPPjP1bylDHY_CJyJ0OSo",
    authDomain: "trading-lab-eed4c.firebaseapp.com",
    projectId: "trading-lab-eed4c",
    storageBucket: "trading-lab-eed4c.appspot.com",
    messagingSenderId: "464147513286",
    appId: "1:464147513286:web:9fe1b9828682676d087cc7",
    measurementId: "G-8F3W4DH407"
};

export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const usersCollection = collection(db, "users");

export let userDoc;

onAuthStateChanged(getAuth(), user => {
    if (user) {
        userDoc = doc(usersCollection, user.uid);
    }
});