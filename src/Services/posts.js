const POST_ROUTE = process.env.REACT_APP_GET_POST_DETAILS;
const POST_CREATE_EMPTY_POST = process.env.REACT_APP_CREATE_EMPTY_POST;
const POST_GET_POSTS_DETAILS = process.env.REACT_APP_GET_POST_CONTENT;
export function getPosts(nombre) {
    return fetch(POST_ROUTE, {
        mode:'cors',
        method :'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify({nombre})
    })
}

export function createEmptyPost(user_name) {
    const objct = {nombre : user_name}
    return fetch(POST_CREATE_EMPTY_POST, {
        mode : 'cors',
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify(objct)
    })
}

export function getPostByIdentifierSubject(identifier, subjectEmail) {
    const route = `/${identifier}/${subjectEmail}`
    return fetch(POST_GET_POSTS_DETAILS+route,{
        mode : 'cors',
        method : 'GET'
    })
}