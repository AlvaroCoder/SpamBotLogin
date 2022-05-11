import { useState,createContext, useContext, useEffect } from "react";
import axios from 'axios';

const authContex = createContext();

export function ProvideAuth({ children }) {
    
    const auth = useProvideAuth();
    return <authContex.Provider value={auth}>{children}</authContex.Provider>
}
function useProvideAuth() {
    const API_ROUTE = 'http://localhost:8084/database/author/signUp'
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false)

    const signIn = (author)=>{
        setUser(author)
    }
    const signUp = (author) =>{
        setIsLogin(true)
        setUser(author)
    }
    const signOut = ()=>{
        setUser(null)
        localStorage.removeItem('user');
    }
    return {
        user,
        isLogin,
        signIn,
        signUp, 
        signOut
    }
}
export const useAuth = ()=>{
    return useContext(authContex);
}

/*
const {usuario, email, contraseña} = author
        const obj_author = {
            nombre : usuario,
            email : email,
            contrasenna : contraseña
        }
        console.log(obj_author);
        axios.post(API_ROUTE, obj_author,{
            method : 'POST',
            headers : {
                "Content-type":'application/json'
            }
        }).then((res)=>{
            setLoading(false)
            setUser(()=>res.data.author)
            setIsLogin(true)
            console.log(res.data);
            console.log(user);
        }).catch((err)=>{
            setLoading(false)
            setError(err)
        })
*/ 