import React from 'react'

export default function ButtonMaker(props) {
    // console.log(`Button Maker Props: ${props}`)
    // why Is the console only laying I'm passing an
    return (
        <div>
            <button>{props.label}</button>
        </div>
    )
}
