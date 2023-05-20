import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc } from "firebase/firestore";
import { firebaseConfig } from "./config.js";
import router from "../router";

export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const usersCollection = collection(db, "users");

export let userDoc;

onAuthStateChanged(getAuth(), user => {
    if (user) {
        userDoc = doc(usersCollection, user.uid);
    }
});

export function logout() {
    signOut(auth).then(() => {
        router.push("/auth");
    });
}