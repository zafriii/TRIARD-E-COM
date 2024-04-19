import React from 'react'
import './button.css'


function Button(props) {
  return (
    <>
    <div className='primary-button'>
    <button> {props.text} </button>
    </div>
       
    </>
  )
}

export default Button