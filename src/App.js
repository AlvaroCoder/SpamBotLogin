import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import { ProvideAuth } from './Authentication/use-auth';
import Author from './Components/Author';
import Ingresar from './Components/LoginForm';
import Home from './Components/Home';
import PageProtected from './Components/PageProtected';
import Premiun from './Components/Premiun';
import Registrar from './Components/SignUpPage';
import Navbar from './Elements/Navbar';
import UserProtected from './UserProtected';

function App() {
  return (
    <ProvideAuth>
        <Navbar></Navbar>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/Ingresar' element={<Ingresar />}></Route>
            <Route path='/Registrar' element={<Registrar/>}></Route>
            <Route path='/author/:author' element={<UserProtected>
            <Author></Author>
            </UserProtected>}></Route>
            <Route path='/Premiun' element={<PageProtected/>}>
            <Route element={<Premiun/>}></Route>
            </Route>
        </Routes> 
    </ProvideAuth>
  )
}

export default App;