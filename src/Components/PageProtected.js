import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Authentication/use-auth';

function PageProtected() {
    const auth = useAuth();
    return auth ? <Outlet/> : <Navigate to='/Registrar'></Navigate>
}

export default PageProtected;
