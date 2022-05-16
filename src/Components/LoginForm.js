import React,{ useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';
import { useAuth } from '../Authentication/use-auth';

function Ingresar() {
  useEffect(()=>{


  },[])
  const { signIn, isLogin, setIsLogin } = useAuth();
  const user = {
    email : '',
    contrasenna : ''
  }
  const [inputValues, setInputValues] = useState(user);
  //const [isLogin, setIsLogin] = useState(false)

  const handleChange = (evt)=>{
    evt.preventDefault();
    const {name,value} = evt.target
    setInputValues({
      ...inputValues,
      [name] : value
    })
  }
  const handleSubmit = (evt)=>{
    evt.preventDefault();
    if (inputValues.email!=='' && inputValues.nombre!== '') {
      signIn(inputValues)
      setIsLogin(true)
    }else{
      alert('Complete el formulario')
    }
  }
  if (isLogin) {
    return <Navigate to='/'></Navigate>
  }else{
    return <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8' onSubmit={handleSubmit}>
        <div className='max-w-md w-full space-y-8'>
          <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Inicia sesión</h1>
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

export default Ingresar;