import React from 'react'
import Avatar from '../Imagenes/man.png';
import { Link } from 'react-router-dom';
function AuthButtons({user}) {
    const author =  user.nombre ||''
    return <div className='md:flex items-center justify-evenly'>
            <button className='h-10 ml-4 mr-4 px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-orange-500'><span><Link to='/author/createPost'>Crear Post</Link></span></button>
            <div className='relative'>
                <button aria-expanded='false' className='text-gray-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <img alt='img-author' className='h-8 w-8 object-cover mr-3 rounded-xl' src={Avatar}></img>
                    <span >{author}</span>
                    <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            </div>
}

export default AuthButtons;