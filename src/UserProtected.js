import {  Navigate } from "react-router-dom";
import { useAuth } from "./Authentication/use-auth";
import Layout from "./Components/Layout";

function UserProtected({children}) {
  const auth = useAuth();
  return auth.user ? <Layout children={children}></Layout> : <Navigate to='/Ingresar'></Navigate>
}
export default UserProtected;
