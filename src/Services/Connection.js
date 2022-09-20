const API_ROUTE = process.env.REACT_APP_URL_API;

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

