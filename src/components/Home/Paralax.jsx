import React from 'react'
import './paralax.css'
import { NavLink } from 'react-router-dom'

function Paralax() {
  return (
    <div className='parallax'>
        <h2>Most wanted of the Year</h2>
        <div className="paralax-btn">
        <NavLink to ='/products'>
            <button>Explore Now!</button>
        </NavLink>
        <img src='images/redbgl.png'></img>
      </div>        
    </div>
  )
}

export default Paralax