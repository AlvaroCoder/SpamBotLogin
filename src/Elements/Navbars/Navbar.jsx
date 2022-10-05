import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../Assets/image/home.png'

function SideBar() {
  return <nav className='fixed z-10 p-2 w-32 bg-background-nav h-screen'>
    <div className='flex flex-col'>
      <div>
        <p>
          Logo
        </p>
      </div>
      <div className='text-white flex-grow '>
          <div className='w-full h-10 py-2 flex flex-row hover:bg-white hover:text-black focus:bg-white'><img src={homeIcon} alt='Home icon' className='ml-2'></img> <Link to='/'><p className='ml-3'>Home</p></Link></div>
          <div><p>Settings</p></div>
      </div>
    </div>
  </nav>

}

export default SideBar;
