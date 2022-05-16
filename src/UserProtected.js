import {  Navigate } from "react-router-dom";
import { useAuth } from "./Authentication/use-auth";

function UserProtected({children}) {
  
  const auth = useAuth();
  return auth.user ? children : <Navigate to='/Registrar'></Navigate>

}
export default UserProtected;
