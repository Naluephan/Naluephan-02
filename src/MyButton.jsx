import React from 'react'

const MyButton = (props) => {
    let c = {
        color:props.color,
        backgroundColor:props.bgcolor
    }
  return (
    
    <button className={"btn btn-"+props.color}>
    {props.text}
    </button>
    
  )
}

export default MyButton