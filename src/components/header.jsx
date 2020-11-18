import React, {useContext} from 'react'
import {AuthContext} from "../provider/AuthProvider";
import {app, auth} from "../firebase/firebase";
import {useHistory} from "react-router";


export const  Header =  () => {
    return <>
        <Navbar />
        <Cover />
        </>
}

const Navbar = () => {
    const {user} = useContext(AuthContext);
    const history = useHistory()
    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Covid | DevAtom</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/countries">Countries</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/about-us">About-us</a>
                </li>
                <li className="nav-item ">
                    { user ? <button className="btn btn-danger" onClick={() =>{auth.signOut()}}>SignOut</button>:
                        <button className="btn btn-success" onClick={() =>{ history.push('/login')}}>SignIn</button>
                    }
                </li>
            </ul>

        </div>
    </nav>
}


const Cover = () => {
    return(
        <h1>Cover</h1>
    )
}
