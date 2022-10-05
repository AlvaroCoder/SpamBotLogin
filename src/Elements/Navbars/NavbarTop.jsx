import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../Hooks/UserContext';

function Navbar() {
    const {nombre} = useUser();
    const route = `/author/${nombre}`
    const text = nombre.slice(0,1)
    useEffect(() => {

    }, [])
    
    return (
    <div className='w-full h-12  pt-1 pl-5 flex flex-row content-center space-x-7'>
        <div className='h-10 rounded-xl flex-initial w-64'></div>
        <div className=' h-10 w-full pr-5 ml-10  flex   flex-row justify-end'>
            <div className='inline-block pt-2'><h1>{nombre}</h1></div>
            <div className='' ><h1 className='bg-background-nav text-white rounded-[50%] text-center w-10  h-full ml-5 pt-2'><Link to={route}>{text}</Link></h1></div>
        </div>
    </div>
    )
}

export default Navbar;