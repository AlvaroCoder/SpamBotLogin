import React from 'react'
import GoogleLogin from 'react-google-login';

const ClientID = "944066342659-qd27c019faj2itkud9qh4ne0lvdh7sff.apps.googleusercontent.com"

function GoogleLoginButton(props) {
    const {message} = props
    const onSuccessGoogle= (res)=>{
        console.log("Success: ",res.profileObj);
    }
    const onFailureGoogle = (res)=>{
        console.log("Failure : ",res);
    }
    return     <GoogleLogin
            className="w-full"
            clientId={ClientID}
            buttonText={message}
            onSuccess={onSuccessGoogle}
            onFailure={onFailureGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
}

export default GoogleLoginButton;