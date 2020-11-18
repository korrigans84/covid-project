import React, { useState, useEffect } from 'react'
import {auth, firebaseConfig} from "../firebase/firebase";
import firebase from "firebase";
import {FirebaseAuthProvider} from "@react-firebase/auth";


export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(auth.currentUser);
    useEffect(async () => {

       auth.onAuthStateChanged( (newUser) => {
            console.log('State changed, user :', newUser)
            if(newUser){
                console.log('new user')
                setUser({
                    uid: newUser.uid,
                    displayName: newUser.displayName,
                    token: newUser.getIdToken(),
                    photoURL: newUser.photoURL
                });
            }
            else {
                console.log('not new user')
                setUser(null);
            }

            console.log('new user state : ', user)
        })
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                authenticated: user !== null,}}>
            <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
                {children}
            </FirebaseAuthProvider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
