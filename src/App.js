import React from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom'
import Ingresar from './Components/SignInPage';
import Home from './Components/Home';
import Registrar from './Components/SignUpPage';
import UserProtected from './UserProtected';
import Author from './Components/Author';
import {CookiesProvider} from 'react-cookie';
import UserContext from './Hooks/UserContext';
import { LostPage } from './Elements';
import PostContent from './Components/PostContent';
import PostCreate from './Components/CreatePost';
import Layout from './Components/Layout';
function App() {
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
                <Route path='/post/new/Untitled' element={<PostCreate/>}></Route>
                <Route path='/post/:identifier/:subjectEmail' element={<PostContent/>}></Route>
                <Route path='/author/:author' element={<Layout children={<Author/>}></Layout>}></Route>
                <Route path='*' element={<LostPage/>}></Route>
            </Routes> 
        </UserContext>
    </CookiesProvider>
  )
}

export default App;