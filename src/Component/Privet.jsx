import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Provider";
import { Navigate, useLocation } from "react-router-dom";


const Privet = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname);
    if(loading){
        return <div className="text-center "><span className="loading loading-ring  loading-lg"></span></div>
    }
if(user){
    return children
}

    return (
        <Navigate state={location.pathname} to="/login">
            
        </Navigate>
    );
};

export default Privet;