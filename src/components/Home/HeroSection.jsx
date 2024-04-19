import React from 'react'
import { NavLink} from "react-router-dom";
import './hero.css'
import Button from '../Button';
import { MdDoubleArrow } from "react-icons/md";
import { FaGift } from "react-icons/fa6";


function Herosection(props) {
    
    
  return (
    <>
    
    <div className="container">

            <div className="hero-section-image neon-border">


                    <div className="hero-section-data">

                       <h3>Welcome to  {props.name}</h3>
                
                        <div id='text-container'>
                                Make 
                                <div id='flip'>
                                <div><div>Work</div></div>
                                <div><div>LifeStyle</div></div>
                                <div><div>Everything</div></div>
                                </div>
                                AweSoMe!
                        </div>
                                                

                        <NavLink to='/products'>
                        <button >Shop Now <MdDoubleArrow className='arrow'/></button>
                        </NavLink>         

                   </div>

                   {/* <img src='images/store.jpg'/> */}

        
                        <img src='images/iPhone12.png'/>

     </div>
            
     </div>


      <div className="gift">
        <img src='images/qrcode.png'></img>
        <p>Scan this QR code to win your gift card! <FaGift className='gift-card'/> <a href ='#'>Scan here</a></p> 
      </div>
    
    
    </>
  )
}

export default Herosection