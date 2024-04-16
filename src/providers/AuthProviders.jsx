import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/firebase/firebase.config";

export const AuthContext = createContext(null); 

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password) 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
        
    }, [])

    const authInfo = {user, createUser, signInUser, signInWithGoogle, signInWithGithub}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}