
import React from 'react';
import { useParams } from "react-router-dom"

function Author() {
    const { author } = useParams();  
    return <div>
        <h1>Bienvenido {author}</h1>
    </div>;
}

export default Author;

