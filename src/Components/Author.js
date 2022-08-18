import React from 'react';
import { useParams } from "react-router-dom"
import { useAuth } from '../Authentication/use-auth';
function Author() {
    const { author } = useParams();  
    const { email, contrasenna, signOut } = useAuth();
    const handleClick = (evt)=>{
        evt.preventDefault();
        signOut();
    }
    return <div>
        <h1>Bienvenido {author}</h1>
        <p>Tu correo es : {email}</p>
        <p>Tu contrasenna es : {contrasenna}</p>
        <button onClick={handleClick}>Cerrar sesión</button>
    </div>;
}

export default Author;

