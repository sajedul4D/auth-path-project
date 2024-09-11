import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Provider";
import { Navigate, useLocation } from "react-router-dom";


const Privet = ({children}) => {
    const {user}=useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname);
if(user){
    return children
}

    return (
        <Navigate state={location.pathname} to="/login">
            
        </Navigate>
    );
};

export default Privet;