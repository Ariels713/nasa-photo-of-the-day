import React from 'react'

export default function PhotoDisplayer(props) {
    // console.log(`PhotoDisplay props: ${props}`)
    // Why can't I see details of props?  All console is loggin is [object object]
    return (
        <div>
           <img src={props.imageSrc} alt="Random Nasa"></img>
        </div>
    )
}
