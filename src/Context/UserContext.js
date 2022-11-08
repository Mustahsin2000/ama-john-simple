import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
   const [user,setuser] = useState(null);

   const [loading,setloading] = useState(true);



   const createUser = (email,password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth,email,password);
   }


   const signIn = (email,password) =>{
    setloading(true);
    return signInWithEmailAndPassword(auth,email,password);
   }


   const logOut = ()=>{
    setloading(true);
    return signOut(auth);
   }

   // useeffect use korlam jeno sign in korar por header a sign je koreche tar info chole ashe
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setuser(currentUser);
        setloading(false);
     })
     return () => unsubscribe();
  },[])

    const authinfo = {user,loading,createUser,signIn,logOut};

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;