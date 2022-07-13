import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDXTOFVxF8A1gjswVYRh3_OQ48JFrZ17IM",
    authDomain: "linkedin-clone-c5d53.firebaseapp.com",
    projectId: "linkedin-clone-c5d53",
    storageBucket: "linkedin-clone-c5d53.appspot.com",
    messagingSenderId: "939041846171",
    appId: "1:939041846171:web:f0b4bb631a8a85e6a8a73e",
    measurementId: "G-HZZR9PTV5Y"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
