import { createContext, useState } from "react";

export const AuthContext= createContext(null)
const Provider = ({children}) => {
    const [user,setUser]=useState(null);

    //  create user


const authInfo={user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;