import React,{useState, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';
import { gapi } from 'gapi-script'
import GoogleLoginButton from "../Buttons/GoogleLoginButton";
import Notification from "../Notification";
import { useAuthentication, useUser, useUserError } from "../../Hooks/UserContext";
import LoadingPage from "../Loadings/LoadingPage";

const clientID = "944066342659-qd27c019faj2itkud9qh4ne0lvdh7sff.apps.googleusercontent.com"

function SignInForm() {
    const {isLogin} = useUser();
    const auth = useAuthentication();
    const error = useUserError();

    const fakeUser = {
        email : '',
        contrasenna : '',
    }
    const [inputValues, setInputValues] = useState(fakeUser);
    const [Error, setError] = useState({message : ''});
    const [isLoading, setIsLoading] = useState(false);
 useEffect(() => {
   function start() {
     gapi.client.init({
         clientId : clientID,
         scope : ""
     })
   }
   return gapi.load('client:auth2',start)
 }, [])
    
    const handleSubmit =(evt)=>{
        evt.preventDefault();
        setIsLoading(true)
        if (inputValues.contrasenna !== '' && inputValues.email !== '' && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValues.email))) {
            auth.signIn(inputValues);            
            
            setError({message : ''})
            setInputValues(fakeUser);
            return;
        }
        setError({
            ...Error,
            message : 'Email o contraseña inválido'
        })
    }
    const handleChange =(evt)=>{
        evt.preventDefault();
        const {name, value} = evt.target
        setInputValues({
            ...inputValues,
            [name] : value
        })
    }

    if (isLogin) {
        return <Navigate to='/'></Navigate>;
    }
    if (isLoading) {
        return <LoadingPage/>
    }
    if(!isLogin){
        return <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8' onSubmit={handleSubmit}>
                    <div className='max-w-md w-full space-y-8'>
                    <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Bienvenido a SPAMBOT</h1>
                    <h1 className='text-center text-2xl font-extrabold text-gray-500'>Inicia sesión</h1>
                        <Notification message={Error || error ? Error.message || error.message : ''}/>
                        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                        <div className='rounded-md shadow-sm -space-y-px'>
                            <div>
                                <label className='sr-only' htmlFor='email' >Ingresa tu email   </label>
                                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' autoComplete='email' value={inputValues.email} onChange={handleChange} name='email' placeholder='Email'></input>
                            </div>
                            <div >
                                <label className='sr-only' >Ingresar tu contraseña :  </label>
                                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' autoComplete='current-password' type='password' value={inputValues.contrasenna} onChange={handleChange} name='contrasenna' placeholder='Contraseña'></input>  
                            </div>              
                        </div>
                        <button type='submit' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            <span>
                            Ingresar
                            </span>
                        </button>
                        <div className="mt-3">
                            <GoogleLoginButton message="Ingresa con Google"></GoogleLoginButton>
                        </div>
                        <div>
                            <p>¿Aún no tienes una cuenta ?<span className="text-blue-500"><Link to='/Registrar'>Registrate</Link></span></p>
                        </div>
                        </form>
                    </div>
                </div>;
    }
}
export default SignInForm;