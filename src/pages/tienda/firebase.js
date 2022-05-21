import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBKLDfkVHYpA6FVRys20-pZ60-iRvB0S1c",
    authDomain: "reac-73b9c.firebaseapp.com",
    projectId: "reac-73b9c",
    storageBucket: "reac-73b9c.appspot.com",
    messagingSenderId: "143532241146",
    appId: "1:143532241146:web:d1cceee6a3e12679839943"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {firebase, db, auth}