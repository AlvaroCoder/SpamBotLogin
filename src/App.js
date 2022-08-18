import React from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom'
import { ProvideAuth } from './Authentication/use-auth';
import Ingresar from './Components/SignInPage';
import Home from './Components/Home';
import Registrar from './Components/SignUpPage';
import UserProtected from './UserProtected';
import {CookiesProvider} from 'react-cookie';
import { LostPage } from './Elements';
function App() {
  return (
    <CookiesProvider>
        <ProvideAuth>
          <Routes>
            <Route path='/' element={<Navigate to='/Home'></Navigate>}></Route>
              <Route path='/Ingresar' element={<Ingresar />}></Route>
              <Route path='/Registrar' element={<Registrar/>}></Route>
              <Route path='/Home' element={
                <UserProtected>
                  <Home></Home>
                </UserProtected>
              }></Route>
              <Route path='*' element={<LostPage/>}></Route>
          </Routes> 
      </ProvideAuth>
    </CookiesProvider>
  )
}

export default App;