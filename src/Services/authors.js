const route_author = process.env.REACT_APP_GET_AUTHOR_DATA
const route_profile = process.env.REACT_APP_UPDATE_AUTHOR_PHOTO
export function getAuthorData(email) {
    const route = route_author+`/${email}`
    return fetch(route,{
        mode : 'cors',
        method : 'GET'
    })
}

export function updateProfilePhoto(img) {
    return fetch(route_profile,{
        mode : 'cors',
        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify(img)

    })
}