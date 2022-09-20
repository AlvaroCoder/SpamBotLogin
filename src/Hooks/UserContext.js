import {createContext, useContext, useState, useEffect} from 'react'
import { useCookies } from 'react-cookie';
import { postConexion } from '../Services/Connection';

const userData = {
    idAuthor : Number,
    nombre : String,
    email : '',
    contrasenna : String,
    contrasenn_hash : String,
    img:String,
    isLogin : false
}

const errorData = {
    message : ''
}

const userContext = createContext(userData);
const userSignIn = createContext();
const userSignUp = createContext();
const userSignOut = createContext();
const useError = createContext(errorData);

export function useUser() {
    return useContext(userContext);
}

export function useUserError() {
    return useContext(useError);
}

export function useAuthentication() {
    return {
        signIn : useContext(userSignIn),
        signUp : useContext(userSignUp),
        signOut : useContext(userSignOut)
    }
}


export default function UserContext({children}) {
    
    const [user, setUser] = useState(userData);
    const [cookies, setCookie, removeCookie] = useCookies(['Author']);
    const [error, setError] = useState(errorData);
    
    const date = new Date();
    date.setTime(date.getTime()+(2*60*60*24*1000));

    useEffect(() => {
        function userCookie() {
            if (cookies.Author) {
                const cookieAuthor = cookies.Author
                cookieAuthor.isLogin = true
                setUser(cookieAuthor);
            }
        }
        return userCookie()
    }, [])
    

    function signIn(author) {
        postConexion('/login', author)
        .then(async (res)=>{
            if (res.ok) {
                return await res.json();
            }
            setError(res.json());
            return;
        })
        .catch((err)=>{
            throw err;
        })
        .then((res)=>{
            const auth = res[0]
            auth.isLogin = true
            setUser(auth);
            if (!cookies.Author) {
                setCookie('Author',res[0],{
                    path : '/',
                    expires : date
                })
            }
        })
    }

    function signUp(author) {
        postConexion('/signUp',author)
        .then(async(res)=>{
            if (res.ok) {
                return await res.json();
            }
            setError(res.json());
            return;
        })
        .catch((err)=>{
            throw err
        })
        .then((res)=>{
            const resUser = res
            resUser.isLogin = true
            setUser(resUser);
            setCookie('Author',res,{
                path : '/',
                expires : date
            })
        })
    }

    function signOut() {
        removeCookie('Author',{
            path:'/'
        })
   }
    return (
    <userContext.Provider value={user}>
        <userSignIn.Provider value={signIn}>
        <userSignOut.Provider value={signOut}>
        <userSignUp.Provider value={signUp}>
            <useError.Provider value={error}>
                {children}
            </useError.Provider>
        </userSignUp.Provider>
        </userSignOut.Provider>
        </userSignIn.Provider>
    </userContext.Provider>
)
}
