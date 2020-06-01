import React from 'react'


const Button = (props) => {

  // console.log('classname', props.className)
  
  return (
  <button className={props.className} onClick={props.handleClick}>
    {props.children}
  </button>
  )
}

export default Button
