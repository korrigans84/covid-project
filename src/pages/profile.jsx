import React , { useContext } from 'react'
import {AuthContext} from "../provider/AuthProvider";
import {auth} from "../firebase/firebase";
import {useHistory} from "react-router";

//This page is accessible only if the user is connected (managed by the router
const Profile = () => {
    const { user } = useContext(AuthContext)

    return (<>
         <ProfilePage user={user}/>
        </>
    )

}

export default Profile;

const ProfilePage = ({user}) => {
    const history = useHistory()
    return (
        <div>
            <p>{user && user.displayName}</p>
            <button onClick={async () => {
                await auth.signOut()
                    .then(() => {
                        history.push('/')
                    })
            }}>LogOut
            </button>
        </div>
    )
}
