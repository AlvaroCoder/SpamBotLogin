import React, {useState,useEffect} from 'react';
import { LoadingHome, NavBarForms, NavBarTop } from '../Elements';
import { getPosts } from '../Services/posts';
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom';
function Home() {  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cookie] = useCookies(["Author"]);
  useEffect( () => {
      async function fetchData() {
        await getPosts(cookie.Author.nombre).then(async (val)=>{
          if (val.ok) {
            return await val.json()
          }
        }).then((res)=>{
          setData(res)
          setLoading(false);
        })
      }
      fetchData()
  }, [])
return <div className='relative w-full min-h-screen  flex flex-col'>
            <NavBarTop/>
            <NavBarForms></NavBarForms>
            <div className=''>
              <div className='w-full min-h-full h-3/5 flex justify-center p-5'>
                  <div className='w-full h-screen bg-slate-300 rounded-md text-center grid  grid-cols-3 gap-4  '>
                    {
                      loading ? <LoadingHome/> : data[0] ? data.map((val)=>{
                        const linkTo = `/post/${val.identifier}/${val.SubjectEmail}`
                        return <div key={val.idPostEmail}>
                                  <div className='bg-slate-500 w-full'>
                                  <h1><Link to={linkTo}>{val.SubjectEmail}</Link></h1>
                                  <time>{val.fecha_creacion}</time>
                                </div>
                              </div>
                      }) : <p>Aún no hay data</p>
                    }

                  </div>
                </div>
            </div>
          </div>;
}

export default Home;
