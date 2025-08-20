import { useState } from "react";
import { AdminAuthContext } from "./AdminAuthContext";
// import { apiUrl } from "../common/http";

export const AdminAuthProvider = ({children}) =>{
    const adminInfo = localStorage.getItem('adminInfo');
    
    
     const [user,setUser] = useState(adminInfo);
  //  const [user, setUser] = useState(adminInfo ? JSON.parse(adminInfo) : null);
  
    const login = (user) => {
        setUser(user)
    }

    const logout  = () => {
        localStorage.removeItem('adminInfo');
        setUser(null)
    }
    
     
return (<AdminAuthContext.Provider value= {{
    user,
    login,
    logout,
}}>
{children}
</AdminAuthContext.Provider>)
}