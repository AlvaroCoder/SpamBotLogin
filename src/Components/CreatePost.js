import React,{useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import { LoadingPage } from '../Elements';
import { useUser } from '../Hooks/UserContext';
import { createEmptyPost } from '../Services/posts';

function PostCreate() {
    const {nombre} = useUser();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function createPosts(name) {
            await createEmptyPost(name).then(async (val)=>{
                if (val.ok) {
                    return await val.json()
                }
            }).catch((err)=>{
                console.log(err);
            }).then((res)=>{
                console.log(res);
                setIsLoading(false)
                setData(res)
            })
        }
        createPosts(nombre);
    }, [])
    if (isLoading) {
        return <LoadingPage/>
    }
    if (data) {
        const route = `/post/${data.identifier}/${data.subjectEmail}`
        return <Navigate to={route}></Navigate>
    }
    
}

export default PostCreate;