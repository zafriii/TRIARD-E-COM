import React from 'react'
import './discount.css'


function Discount() {
  return (


    <div className="disc-box">

      <h3 className='disc-title'>Discounts</h3>
    
    <div className="disc-container">

    <div className='discount'>

        <div className="disc-text">

        <h4><span>Discount</span> upto 30%</h4>
        <h4>goin'g on our watches</h4>
        <h4 className='price'><span>600 Tk</span>499 Tk</h4>

        </div>

        <div className="dis-img">
            <img src='images/redwc.png'></img>
        </div>
       
    </div>
    </div>
    </div>
  )
}

export default Discount