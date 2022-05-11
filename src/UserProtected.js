import {  Navigate } from "react-router-dom";
import { useAuth } from "./Authentication/use-auth";

function UserProtected({children}) {
  
  const auth = useAuth();
  return auth.user ? children : <Navigate to='/Ingresar'></Navigate>

}
export default UserProtected;
