import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
   
    const[user,setUser]=useState('')
    const[loading,setLoading]=useState(true)
    
    // create user
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in  user 
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
     
    // google signIn
    const googleSignIn=(googleProvider)=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    // updateUser 
    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }
    // logout user 
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
     
    // observer 

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])
    const authInfo={
       user,
       createUser,
       signIn,
       logOut,
       loading,
       updateUser,
       googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;