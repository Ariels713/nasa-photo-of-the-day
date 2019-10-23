import React from 'react'

export default function PhotoDisplayer(props) {
    console.log(`PhotoDisplay props: ${props}`)
    return (
        <div>
           <img src={props.imageSrc} alt="Random Nasa Image"></img>
        </div>
    )
}
