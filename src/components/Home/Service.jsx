import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import './service.css'


function Service() {
  return (
    <>

    <div className="service-box">
      <h3 className='service'>Services</h3>
    
    <div className="service-container">

            <div className="services-1">
              <TbTruckDelivery className="icon" />
              <h4>Super Fast and Free Delivery</h4>
            </div>

            <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h4>Non-contact Shipping</h4>
              </div>
              </div>
              <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h4>Money-back Guaranty</h4>
              </div>
            </div>
            </div>
          

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h4>Super Secure Payment System</h4>
            </div>
          </div>     
            
    </div>

    </div>
    
    </>
  )
}

export default Service