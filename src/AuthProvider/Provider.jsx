import { createUserWithEmailAndPassword, FacebookAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext= createContext(null)
const Provider = ({children}) => {
    const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true)
const GoogleProvider=new GoogleAuthProvider;
const FaceBookProvider=new FacebookAuthProvider;
 

 const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

 // update user profile
 const updateUserProfile=(name,image)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL:image
      })
 } 
  

 const CreateLogin=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }
 const LogOut=()=>{
    setLoading(true)
    setUser(null)
    signOut(auth)
 }

//   sign with Google
const logingoole=()=>{
    setLoading(true)
    return signInWithPopup(auth,GoogleProvider)
}

// login with facebook
const signWithFb=()=>{
    setLoading(true)
    return signInWithPopup(auth,FaceBookProvider)
}

// update profile




 useEffect(()=>{
    

    const unSubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user);
        setLoading(false)
      }
           
    });
    return ()=> unSubscribe();
 },[])
const authInfo ={ user,createUser,CreateLogin,LogOut ,loading,updateUserProfile, logingoole,signWithFb}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

   

export default Provider;
 
Provider.propTypes={
    children:PropTypes.node
}