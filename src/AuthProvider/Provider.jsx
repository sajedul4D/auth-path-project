import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import PropTypes from 'prop-types';

export const AuthContext= createContext(null)
const Provider = ({children}) => {
    const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true)

 

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
   
    setUser(null)
    signOut(auth)
 }

//   sign with Google


// login with facebook



 useEffect(()=>{
    

    const unSubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user);
        setLoading(false)
      }
           
    });
    return ()=> unSubscribe();
 },[])
const authInfo ={ user,createUser,CreateLogin,googleLogin,FacebookLogin,GithubLogin,LogOut ,loading,updateUserProfile}

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