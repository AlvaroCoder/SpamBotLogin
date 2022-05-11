import React, { useEffect,useState } from 'react';
import Avatar from '../Imagenes/man.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../Authentication/use-auth';
function Navbar() {
  const auth = useAuth();
  const SignOut = (evt)=>{
    evt.preventDefault();
    auth.signOut();
  }
  const LoginButtons = ()=>{
    return <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <p className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'><Link to='/Ingresar'>Ingresar</Link></p>
            <p className='h-10 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'><Link to='/Registrar'>Registrar</Link></p>
          </div>
  }
  const AuthButtons = ()=>{
    const author = auth.user.usuario
    const authoRoute = `/author/${author}`
    return <div className='md:flex items-center justify-evenly'>
            <button className='h-10 ml-4 mr-4 px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-orange-500'>Crear Post</button>
            <div className='relative'>
              <button aria-expanded='false' className='text-gray-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <img alt='img-author' className='h-8 w-8 object-cover mr-3 rounded-xl' src={Avatar}></img>
                  <span >
                    {author}
                  </span>
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
              </button>
              <div className='absolute z-10  transform -translate-x-1/2 mt-3 px-2 w-64 max-w-md sm:px-0'>
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='relative grid gap-6 items-center justify-center bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    <span className='mb-0 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                      <Link to={authoRoute}>Ver Perfil</Link>
                    </span>
                    <button onClick={SignOut} type='button' className='w-40 h-10 mt-0 ml-8 whitespace-nowrap inline-flex items-center justify-center p-3  border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  }
  return <nav className='w-full h-14 bg-white flex flex-row justify-between items-center border-b-2 border-gray-100'>
      <div className='basis-1/4'>
        <h1 className='px-4'><Link to='/'>Home</Link></h1>
      </div>
      <div className='basis-1/2 flex items-center'>
        <input className='h-10 w-2/4 px-2 border-2 rounded-md border-slate-400' placeholder='Buscar ...'></input>
      </div>
      <div className='basis-1/4'>
        { auth.user ? <AuthButtons></AuthButtons> : <LoginButtons></LoginButtons>}
      </div>
  </nav>
}

export default Navbar;