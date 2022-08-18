const API_ROUTE = 'http://localhost:8084/database/author';

export function postConexion(route,author) {
    return fetch(API_ROUTE+route,{
        mode : 'cors',
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify(author)
    })
}

