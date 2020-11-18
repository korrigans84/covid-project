import React from 'react'
import {auth} from "../firebase/firebase";
import {Button} from "semantic-ui-react";

const Home = () => {
    const handleClick = () => {
        auth.signOut();
    }
    return <div className="container">

            <h1 className="text-primary">Home</h1>
            <Button primary onClick={handleClick}> Sign out</Button>
        </div>
}
export default Home;
