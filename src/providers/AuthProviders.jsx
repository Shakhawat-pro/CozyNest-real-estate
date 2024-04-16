import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../components/firebase/firebase.config";

export const AuthContext = createContext(null); 

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    
    const signInWithGoogle = (email, password) =>{
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