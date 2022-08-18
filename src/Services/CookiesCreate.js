import React from 'react'
import { useCookies } from 'react-cookie';

function CookiesCreate() {
    const [] = useCookies([])
    return (
        <div>CookiesCreate</div>
    )
}

export default CookiesCreate;