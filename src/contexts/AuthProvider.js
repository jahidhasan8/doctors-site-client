import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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
     
    // updateUser 
    const updateUser=(userInfo)=>{
        return updateProfile(user,userInfo)
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
       updateUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;