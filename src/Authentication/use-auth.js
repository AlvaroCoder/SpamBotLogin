import { useState,createContext, useContext, useEffect } from "react";

const authContex = createContext();
const API_ROUTE = 'http://localhost:8084/database/author';

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContex.Provider value={auth}>{children}</authContex.Provider>
}

function useProvideAuth() {
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [error,setError] = useState({});

    const signIn =(author)=>{
        fetch(API_ROUTE+'/login',{
            mode : 'cors',
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(author)
        }).then(async (res)=>{
            if (res.status>=400) {
                const err = await res.json()
                setError(err)
                return;
            }
            return res.json()
        }).catch((err)=>{
            console.log(err);
        }).then((res)=>{
            setUser(res[0])
            setIsLogin(true)
        })
    }
    const signUp= (author) =>{
        fetch(API_ROUTE+'/signUp',{
            mode : 'cors',
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(author)
        }).then(async (res)=>{
            //return server response as text
            if (res.status >= 400) {
                const er = await res.text()
                setError(JSON.parse(er))
                return;
            }
            setUser(author);
            setIsLogin(true);
        }).catch((err)=>{
            console.log(err);
        })
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
        signOut,
        setIsLogin,
        error
    }
}
export const useAuth = ()=>{
    return useContext(authContex);
}