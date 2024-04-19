import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './cart.css'
import CartItem from '../Cart/CartItem';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import FormatPrice from '../../Helper/FormatPrice';
import { IoIosArrowBack } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";


function Cartpage() {

const {user, isAuthenticated} = useAuth0();

let {cart, total_price, shipping_fee} = useCartContext();


if( cart == null || cart.length === 0){
    return(
        <>
        <div className="empty"><h3>No item in the cart !</h3></div>
        </>
    )
}



  return (
    <>
    
     <div className="cart-container">
    {

    isAuthenticated && (
    <div className='user-profile'>
      <img className='user-dp' src={user.picture} alt={user.name} />
      <h2 className='user-name'> {user.name}</h2>    
    </div>)

    }

            <div className="cart-heading-container">

                 <p className="cart-item">Item</p>
                <p className="cart-hide-price">Price</p>
                <p className="cart-qnt">Quantity</p>
                <p className="cart-hide-sub">Subtotal</p>
                <p className='remove'>Remove</p>           

            </div>


            <div className="cart-item">
                
                {cart.map((curElem) => {
                    return <CartItem key={curElem.id} {...curElem} />;
                })}
                                                
            </div>  

            <hr/> 


        <div className="card-btn-price">       

        <div className="shopping">
            <NavLink to='/products'><button> <IoIosArrowBack />  Continue Shopping</button></NavLink>
        </div>

        <div className="order-total-amount">
              <div className="order-total-subdata">

                <p>---Order details ---</p>

                <div>

                <p>Subtotal : <FormatPrice price={total_price}/>  </p>

                </div> 

                <p>Shipping Fee : <FormatPrice price={shipping_fee}/>  </p>
              
                <p>Order Total : <FormatPrice price={shipping_fee + total_price}/>  </p> 

                                         
        </div> 

         <div className="place-order">
            <NavLink to='/bill'><button >Place Order</button></NavLink>         
        </div>    



        </div>
        
        </div> 
    </div> 
    
    </>
  )
}

export default Cartpage


