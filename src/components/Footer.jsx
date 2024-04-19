import React from 'react'
import { NavLink} from "react-router-dom";
import Button from './Button';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

import './footer.css'

function Footer() {
  return (
    <>
    
    <div className="primary-footer">
    <div className="contact-short">

            <div className="con-text">
                <h3>Ready to get started?</h3>
                <h3>Talk to us today</h3>
            </div>

            <div className="start-button">
                <NavLink to='/'><button>Get started</button></NavLink>
          </div>
    </div>
    </div>

    <div className="main-footer">

        <div className="foot-continer">

        <div className="footer-about">
              <h3>TRIARD</h3>
              <p>Find your favourite gadgets in reasonable price </p>
            </div>

        <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                 {/* <Button className='subscribe' text='Subscribe'></Button>    */}
                 <button className='subscribe' type="submit" value="subscribe">Subscribe</button>
              </form>
        </div> 


        <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a>
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+88 01714483770</h3>
            </div>

            


             </div>         
        
             </div>


    <div className="footer-bottom">
        
    <div className="text-1 ">
              <p>
                @{new Date().getFullYear()} TRIARD. All Rights Reserved
              </p>          
    </div> 

    <div className="text- ">
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>            
              
    </div>        

    </div>        

    </>
  )
}

export default Footer