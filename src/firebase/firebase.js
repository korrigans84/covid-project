import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_BASEURL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export const googleProvider  = new firebase.auth.GoogleAuthProvider();
export const database = firebase.database()
firebase.analytics();




