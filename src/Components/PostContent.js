import React,{useState, useEffect} from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { useUser } from '../Hooks/UserContext';
import {getPostByIdentifierSubject } from '../Services/posts';

function Content({ide, subj}) {
    const auth = useUser();
    const title = subj;
    const [asunto, setAsunto] = useState(title);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const changeAsunto=(evt)=>{
        setAsunto(evt.target.value)
    }
    useEffect(() => {
        async function getContentPost (identifier, subjectEmail) {
            await getPostByIdentifierSubject(identifier, subjectEmail).then((val)=>{
                if (val.ok) {
                    return val.json()
                }
            }).then((res)=>{
                setData(res)
                setIsLoading(false);
            });
        }
        getContentPost(ide, subj);
    }, [])
    
    return (
        <>
        <nav className='w-full h-12 bg-slate-500 text-center'>
            <h1><Link to='/'>Home</Link></h1>
            <p>/{asunto}</p>
        </nav>
            <div className='w-full mt-5 h-screen flex justify-center'>
                <div className='w-1/2  h-2/3 text-xl'>
                    <div className='flex flex-row'>
                        <h1 >De : {auth.email} </h1>
                    </div>
                    <div>
                        <h1>Para : <input className='w-fit ml-2'></input ></h1>
                    </div>
                    <div className='flex flex-row'>
                        <h1>Asunto : </h1> <input className='w-fit ml-2' type='text' onChange={changeAsunto} value={asunto} name='subjectBox'></input>
                    </div>
                    <section>
                        <h1>Content</h1>
                        <p>Estado : {data.estado}</p>
                        {isLoading ? <p>La data se esta cargando </p> : <p>Ya se cargo la data </p>}
                    </section>
                </div>
            </div>
        </>
    )
}
 function PostContent() {
    let {identifier, subjectEmail} = useParams();
    return <Content ide={identifier} subj={subjectEmail}/>
}

export default PostContent;