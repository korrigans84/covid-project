import React , { useContext, useEffect } from 'react'
import {auth} from "../firebase/firebase";
import {AuthContext} from "../provider/AuthProvider";
import {useHistory} from "react-router";



const Register = () => {
    const {user, setUser} = useContext(AuthContext)
    const history = useHistory()
    const handleClick = () => {

        auth.onAuthStateChanged(setUser)
    }
    useEffect(() => {
        if(user){
            history.push('/profile')
        }
    }, [user])

    return <><h1>Register</h1>
        {JSON.stringify(user)}
        <button onClick={handleClick}> Register with Google</button>
    </>
}
export default Register;
