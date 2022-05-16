import React,{useState, useEffect} from "react";
import { useAuth } from '../Authentication/use-auth';
import FormValidation from "../Authentication/form-validation";
import {Navigate} from 'react-router-dom';
function SignInForm() {
    const {signIn, isLogin, error } = useAuth();

    const user = {
        email : '',
        contrasenna : '',
    }
    const [inputValues, setInputValues] = useState(user);
    const [data, setData] = useState({})
    useEffect(()=>{
        let respond = FormValidation(inputValues);
        if (!respond.message) {
            signIn(data)
        }
    },[data])
    const handleSubmit =(evt)=>{
        evt.preventDefault();
        let respond = FormValidation(inputValues);
        if (!respond.message) {
          setData(inputValues);
        }
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
    }else{
        return <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8' onSubmit={handleSubmit}>
        <div className='max-w-md w-full space-y-8'>
        <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Inicia sesión</h1>
            <p className='text-red-500'>{error ? error.error : ''}</p>
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
            </form>
        </div>
    </div>;
    }
}
export default SignInForm;