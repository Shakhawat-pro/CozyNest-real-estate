import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/firebase/firebase.config";

export const AuthContext = createContext(null); 

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password) 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
        
    }, [])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserDisplayName = (newDisplayName) => {
        updateProfile(auth.currentUser, {displayName: newDisplayName})
        .then(() => {
            setUser({ ...user, displayName: newDisplayName });
            console.log("User display name updated successfully!");
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const authInfo = {user, loading, createUser, signInUser, signInWithGoogle, signInWithGithub, logOut, updateUserDisplayName}
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