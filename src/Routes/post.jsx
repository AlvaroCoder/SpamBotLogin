import React from 'react'
import { Route, Navigate, useParams} from 'react-router-dom';
import PostContent from '../Components/PostContent';
function PostRouter() {
    const {identifier, subjectEmail} = useParams();
    const generateCode = ()=>{
        const base = 'abcdefghijklmopqrstuvxyzABCDEFGHIJKLMNOPQRSTUXYZ0123456789'
        let passwor = ''
        for (let index = 0; index < 15; index++) {
            let num_random = Math.floor(Math.random()*base.length)
            passwor+=base.charAt(num_random);
        }
        return passwor;
        }
    if (identifier === 'new') {
        const code = generateCode();
        const route = `/post/${code}/Untitled`;
        return <Navigate to={route}></Navigate>
    }
    return <Route path='/post/:identifier/:subjectEmail'  element={<PostContent/>}></Route>
}

export default PostRouter;