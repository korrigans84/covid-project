import React, { useState, useCallback } from 'react'
import {auth} from "../firebase/firebase";


export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    useCallback(() => {
        auth.onAuthStateChanged(setUser)
        console.log(user)
    }, [])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
