import React , { useContext, useEffect } from 'react'
import {auth, googleProvider} from "../firebase/firebase";
import {AuthContext} from "../provider/AuthProvider";
import {useHistory} from "react-router";
import {FirebaseAuthConsumer} from "@react-firebase/auth";



const Login = () => {
    const {user, } = useContext(AuthContext)
    const history = useHistory()
    const handleClick = async () => {
            await auth.signInWithPopup(googleProvider)
                .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    useEffect(() => {
        if(user){
            history.push('/profile')
        }
    }, [user])

    return <>
        <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
                return (
                    <pre style={{ height: 300, overflow: "auto" }}>
                    {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                  </pre>
                );
            }}
        </FirebaseAuthConsumer>
        <h1>Login</h1>
        {user && user.displayName}
        <button onClick={handleClick}> Login with Google</button>
        </>
}
export default Login;
