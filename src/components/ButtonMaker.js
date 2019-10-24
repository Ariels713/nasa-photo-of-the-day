import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;

  ${props => (props.type === "Random Date in History" ? `background: #fdd835` : `background: #fdd835`)}
`;



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
            <Button 
            onClick={() => props.updateImage(anyDate)}
            >{props.label}
            </Button>
        </div>
    )
}
