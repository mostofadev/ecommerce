import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AdminAuthContext } from "../context/AdminAuthContext";

export const AdminRequireAuth = ({children}) => {
    
    
    const {user} = useContext(AdminAuthContext)
    console.log(user);
    if(!user) {
       return <Navigate to={`/admin/login`} />
    }
    return children;
}