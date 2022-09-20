import React, {Fragment} from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { useAuthentication, useUser } from '../../Hooks/UserContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const user = useUser(); 
  const useUserAuth = useAuthentication();
  const authRoute = `/auth/:${user.nombre}`
  const handleSignOut = evt=>{
    evt.preventDefault();
    useUserAuth.signOut();
  }
  return <Disclosure as="nav" className="bg-gray-200">
  {()=>(
    <div className='max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='flex flex-row items-center  justify-between h-14'>
        <h1>SPAM BOT</h1>
        <Menu as='div' className='ml-3 relative'>
          <div>
            <Menu.Button className='bg-slate-500 flex  rounded-full focus:outline-none p-2'>
              <span className='h-8 w-8 text-2xl text-white'>
                {user.nombre.slice(0,1)}
              </span>
            </Menu.Button>  
          </div>
          <Transition 
            as={Fragment}
            enter = 'transition ease-out duration-100'
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                <Menu.Item >
                  {({active})=>(
                    <span>
                      <Link className={classNames(active ? 'bg-gray-100' : '','block px-4 py-2 text-sm text-gray-700' )} to={authRoute}>Ver Perfil</Link>
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({active})=>(
                    <button onClick={handleSignOut} className={classNames(active ? 'bg-gray-100' : '','block w-full px-4 py-2 text-sm text-red-400' )}>Cerrar Sesión</button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
        </Menu>
      </div>
    </div>
  )}
 </Disclosure>

}

export default Navbar;
