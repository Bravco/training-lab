import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, doc } from "firebase/firestore";
import { firebaseConfig } from "./config.js";
import router from "../router";

export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const usersCollection = collection(db, "users");

let auth = getAuth();
export let userDoc;
export let plansCollection;

export function planDoc(planId) {
    if (auth.currentUser) {
        return doc(plansCollection, planId);
    }
}

onAuthStateChanged(auth, user => {
    if (user) {
        userDoc = doc(usersCollection, user.uid);
        plansCollection = collection(userDoc, "plans");
    }
});

export function logout() {
    signOut(auth).then(() => {
        router.push("/auth");
    });
}