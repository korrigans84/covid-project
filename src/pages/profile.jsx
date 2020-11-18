import React , { useContext } from 'react'
import {AuthContext} from "../provider/AuthProvider";
import {auth} from "../firebase/firebase";


const Profile = () => {
    const {user} = useContext(AuthContext)
    return(<div>
        <p>{JSON.stringify(user)}</p>
            <button onClick={auth.signOut()} >LogOut </button>
        </div>
    )
}

export default Profile;
