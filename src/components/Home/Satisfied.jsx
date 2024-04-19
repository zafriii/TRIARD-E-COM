import React from 'react'
import './satisfy.css'

function Satisfied() {
  return (
    <>
    <div className="vdo-box">
    <h3 className='satisfaction'>Customer Satisfaction</h3>
    <div className='vdo-container'>
    <div className="video">
    <video src="videos/phone.mp4" muted autoPlay loop type="video/mp4">
    Your browser does not support the video tag.
    </video>

     <div className="vdo-txt-box">
    <div className="video-text">
        <h3>Our Satisfied Customer 🥳</h3>
        <h3>First look at the brand new iphone 😍</h3>
    </div>
    </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default Satisfied