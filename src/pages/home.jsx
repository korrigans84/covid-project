import React from 'react'
import {app} from "../firebase/firebase";



const Home = () => {
    const handleClick = () => {
        app.auth().signOut();
    }
    return <>
    <h1>Home</h1>

    <button className="btn btn-primary" onClick={handleClick}> Sign out</button>
        </>
}
export default Home;
