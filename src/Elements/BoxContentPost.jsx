import React from 'react'

function BoxContentPost({content}) {
    const getContentFragment=(index, text, obj, type)=>{
        let modifiedText = text;
    }
    return ( 
        <div>
            {
                content.map((text, index)=>{
                    const textElem = text
                    return <p >{textElem}</p>
                })
            }
        </div>
    )
}

export default BoxContentPost