import { useState,createContext, useContext, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { postConexion } from '../Services/Connection';

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
}
function calculateDate(daysAfter) {
    const dayNow = new Date();
    dayNow.setTime(dayNow.getTime() + (daysAfter * 60 * 60 * 24 * 1000));
    return dayNow;
}

function useProvideAuth() {
    const [isLogin, setIsLogin] = useState(false);
    const [error,setError] = useState({});
    const [cookie , setCookie, removeCookie] = useCookies(['Author']);
    const [user, setUser] = useState({} || cookie.Author);
    let dateExp = calculateDate(2);
    const signIn = (author)=>{
        postConexion('/login', author).then(async (res)=>{
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
            setCookie('Author',res[0],{
                 path:'/',
                 expires:dateExp
            });
        })
    }
    const signUp= (author) =>{
        postConexion('/signUp',author).then(async (res)=>{
            //return server response as text
            if (res.status >= 400) {
                const er = await res.json()
                setError(er)
                return;
            }
            return res.json()
        }).catch((err)=>{
            console.log(err);
        }).then((res)=>{
            setUser(res);
            setIsLogin(true);
            setCookie('Author',res,{
                path:'/',
                expires: dateExp
            })
        })
    }
    const signOut = ()=>{
        setUser({})
        removeCookie('Author',{
            path:'/'
        })
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
export const useAuth = () =>{
    return useContext(authContext);
}