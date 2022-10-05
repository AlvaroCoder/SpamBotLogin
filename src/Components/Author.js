import React, {useEffect, useState} from 'react';
import { Navigate, useParams } from "react-router-dom"
import { LoadingPage } from '../Elements';
import { getAuthorData, updateProfilePhoto } from '../Services/authors';
function Author() {
    // Perfil del usuario
    // El usuario puede :
    // 1. Cambiar de contraseña
    // 2. Actualizar su foto de perfil
    const {author} = useParams();
    const [dataUser, setDataUser] = useState({})
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [imageProfile, setImageProfile] = useState(null);
    const selectImage =(evt)=>{
        setImageProfile(evt.target.files[0])
    }   
    const sendImage = async (evt)=>{
        evt.preventDefault();
        if (imageProfile) {
            let formdata = new FormData();
            formdata.append('img',imageProfile);

            console.log(formdata);

            await updateProfilePhoto(formdata);
            setImageProfile(null)
        }else{
            alert('Sube una imagen')
        }
    } 
    useEffect(()=>{
        async function getDataUser(author) {
            await getAuthorData(author).then((val)=>{
                if (val.ok) {
                    return val.json()
                }
            }).catch((err)=>{

            }).then((res)=>{
                setDataUser(res);
                setIsLoading(false)
                res.isLogin == 1 && setIsLogin(true);
            })
        }
        getDataUser(author);
    },[])
    if (isLoading) {
        return <LoadingPage></LoadingPage>
    }

    if (isLogin) {
        return <div>
                    <h1>Bienvenido : {author}</h1> 
                    <h1>Email : {dataUser.email}</h1> 
                    <h1>Contraseña : {dataUser.password}</h1>
                    <h1>Usuario creado : {dataUser.create_time}</h1>
                    <h1>Actualizar la photo de profile</h1>
                    <div>
                        <input type='file' onChange={selectImage} className='w-50 h-10 bg-slate-400'></input>
                        <button onClick={sendImage}>Guardar imagen</button>
                    </div>      
                </div>;
    }else{
        return <Navigate to='/'></Navigate>
    }
}

export default Author;

