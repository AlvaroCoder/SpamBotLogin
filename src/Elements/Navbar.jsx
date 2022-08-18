import React from 'react';
// import Avatar from '../Imagenes/man.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../Authentication/use-auth';
import AuthButtons from './AuthButtons';
function Navbar() {
  const { user } = useAuth();
  console.log(user);
  const LoginButtons = ()=>{
    return <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <p className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'><Link to='/Ingresar'>Ingresar</Link></p>
            <p className='h-10 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'><Link to='/Registrar'>Registrar</Link></p>
          </div>
  }
  
  return <nav className='w-full h-14 bg-white flex flex-row justify-between items-center border-b-2 border-gray-100'>
      <div className='basis-1/4'>
        <h1 className='px-4'>SPAM BOT</h1>
      </div>
      <div className='basis-1/2 flex items-center'>
        <input className='h-10 w-2/4 px-2 border-2 rounded-md border-slate-400' placeholder='Buscar ...'></input>
      </div>
      <div className='basis-1/4'>
        { user ? <AuthButtons user={user}></AuthButtons> : <LoginButtons></LoginButtons>}
      </div>
  </nav>
}

export default Navbar;
