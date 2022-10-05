import React from 'react';
import { Link } from 'react-router-dom';

function NavbarForms() {

  return (
    <div className='bg-gray-600 relative h-20'>
        <div className='bg-gray-200'>
          <Link to='/post/new/Untitled'>Crear nuevo mensaje</Link>
        </div>
        <div>

        </div>
    </div>
    )
}

export default NavbarForms;