import React from 'react'
import { FaTrash } from "react-icons/fa";
import FormatPrice from "../../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import './cart.css'
import { useCartContext } from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

function CartItem({id, name, image, color, price, amount}) {

const {removeItem, setIncrease, setDecrease} = useCartContext();

 

    return(


        <>
        

               <div className="cart-product-info">

                <div className="cart-name-image">

                    
                    <img className='cart-img' src={image} alt={id} />

                    <div className="name-color">
                    <p>{name}</p>

                    <div className="color-style"
                       style={{ backgroundColor: color, color: color }}>
                    {/* <p>color:</p>  */}
                    </div>
                    

                    </div>
                   
                    


                </div>
                

                <div className="cart-hide">

                <p className='forprice1'>
                    <FormatPrice price={price} />
                </p>

                </div>

                <div className="cart-amnt">

                {/* <CartAmountToggle className='toggle'
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}/> */}

                    <CartAmountToggle
                    amount={amount}
                    setDecrease={() => setDecrease(id)}
                    setIncrease={() => setIncrease(id)}
                />
                </div>

                {/* <div className="crt-am">{amount}</div> */}


              <div className="cart-hide">
                  <p className='forprice2'>
                     <FormatPrice price={price * amount} />
                  </p>
             </div>


                <div>
                <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
               </div>


                </div>

      
        
        </>
    )

}

export default CartItem


