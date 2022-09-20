import {  Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import { useUser } from "./Hooks/UserContext";

function UserProtected({children}) {
  const auth = useUser();
  return auth.isLogin ? <Layout children={children}></Layout> : <Navigate to='/Ingresar'></Navigate>
}
export default UserProtected;
