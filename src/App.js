import React from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom'
import Ingresar from './Components/SignInPage';
import Home from './Components/Home';
import Registrar from './Components/SignUpPage';
import UserProtected from './UserProtected';
import {CookiesProvider} from 'react-cookie';
import UserContext, { useUser } from './Hooks/UserContext';
import { LostPage } from './Elements';
import PostCreate from './Components/CreatePost';
import PostContent from './Components/PostContent';
function App() {
  const user = useUser();
  return (
    <CookiesProvider >
        <UserContext>
          <Routes>
              <Route path='/' element={<Navigate to='/Home'></Navigate>}></Route>
                <Route path='/Ingresar' element={<Ingresar />}></Route>
                <Route path='/Registrar' element={<Registrar/>}></Route>
                <Route path='/Home' element={
                  <UserProtected>
                    <Home></Home>
                  </UserProtected>
                }></Route>
                <Route path='/post/:subjectemail' element={<PostContent/>}></Route>
                <Route path='/post/create' element={<PostCreate/>}></Route>
                <Route path='*' element={<LostPage/>}></Route>
            </Routes> 
        </UserContext>
    </CookiesProvider>
  )
}

export default App;