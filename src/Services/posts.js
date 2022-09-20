const POST_ROUTE = process.env.REACT_APP_GET_POST_DETAILS;

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
export function getPostsContent(subjectPost) {
    const route = `/${subjectPost}`
    return fetch(POST_ROUTE+route,{
        mode : 'cors',
        method : 'GET'
    })
}