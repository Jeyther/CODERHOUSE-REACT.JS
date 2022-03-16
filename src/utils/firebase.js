import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-ix-BdYZsTVJBRvDvjTxHqaeDDd04i3w",
    authDomain: "veterinaria-petshop.firebaseapp.com",
    projectId: "veterinaria-petshop",
    storageBucket: "veterinaria-petshop.appspot.com",
    messagingSenderId: "270964706252",
    appId: "1:270964706252:web:99bde27453eb5de6486b69"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default db;