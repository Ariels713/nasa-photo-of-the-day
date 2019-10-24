import React from 'react'



export default function ButtonMaker(props) {

    function randomDate(start , end) {
        const datePicker = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      
        return datePicker.toISOString().split('T')[0]
      }
      
    let anyDate = randomDate(new Date(2012, 0, 1), new Date());
        // console.log(`Button Maker Props: ${props}`)
    // why Is the console only laying I'm passing an
    return (
        <div>
            <button onClick={() => props.updateImage(anyDate)}>{props.label}</button>
        </div>
    )
}
