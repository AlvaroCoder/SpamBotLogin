import React from 'react'
import Avatar from '../../Imagenes/man.png';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
function AuthButtons({user}) {
    const author =  user.nombre ||''
    return (
            <Menu as='div' className='ml-3 relative'>
                <div>
                    <Menu.Button className='bg-gray-400 flex text-sm rounded-full'>
                        <span>Soy un Boton</span>
                    </Menu.Button>
                </div>
                <Menu.Items>
                    <Menu.Item>
                        <p>hOLA</p>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
    )

}

export default AuthButtons;