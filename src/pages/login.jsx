import React , { useContext } from 'react'
import  { signInWithGoogle} from "../firebase/firebase";
import {AuthContext} from "../provider/AuthProvider";



const Login = () => {
    const {user} = useContext(AuthContext)
    const handleClick = () => {
        signInWithGoogle()
    }

    return <><h1>Login</h1>
        {JSON.stringify(user)}
        <button onClick={handleClick}> Login with Google</button>
        </>
}
export default Login;
