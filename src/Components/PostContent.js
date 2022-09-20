import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { BoxContentPost } from '../Elements';
import { useUser } from '../Hooks/UserContext';
import { getPostsContent } from '../Services/posts';

function PostContent() {
    const auth = useUser();
    let email = auth.email
    let {subjectemail} = useParams();
    const title = subjectemail.split("&").join(" ");
    const [deContent, setDeContent] = useState(email);
    const [asunto, setAsunto] = useState(title);
    const [data, setData] = useState({});

    const changeAsunto=(evt)=>{
        setAsunto(evt.target.value)
    }
    const changeDe=(evt)=>{
        setDeContent(evt.target.value);
    }
    useEffect(() => {
        async function fetchaData() {
            await getPostsContent(subjectemail).then(async (val)=>{
                if (val.ok) {
                    return await val.json()
                }
            }).then((val)=>{
                setData(val)
            })
        }
        fetchaData()
    }, [])
    
    return (
        <><nav className='w-full h-12 bg-slate-500 text-center'><p>/{asunto}</p></nav>
            <div className='w-full mt-5 h-screen flex justify-center'>
                <div className='w-1/2  h-2/3 text-xl'>
                    <div className='flex flex-row'>
                        <h1 >De : </h1><input className='w-fit ml-2' type='text' onChange={changeDe} value={deContent}></input>
                    </div>
                    <div>
                        <h1>Para : <input className='w-fit ml-2'></input ></h1>
                    </div>
                    <div className='flex flex-row'>
                        <h1>Asunto : </h1> <input className='w-fit ml-2' type='text' onChange={changeAsunto} value={asunto} name='subjectBox'></input>
                    </div>
                    <section>
                        <h1>Content</h1>
                        <BoxContentPost content={data}></BoxContentPost>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PostContent