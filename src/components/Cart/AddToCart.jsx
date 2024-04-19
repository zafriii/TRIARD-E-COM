import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import './addtocart.css'
import CartAmountToggle from "./CartAmountToggle";
import Button from '../Button';
import { NavLink} from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";


function AddToCart({product}) {

  const {addToCart} = useCartContext();

  const { id, colors , stock} = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);


  const setDecrease = () =>{
    amount> 1 ? setAmount (amount-1) : setAmount(1);
  }

  const setIncrease = () =>{
    amount < stock ? setAmount(amount+1) : setAmount(stock);
  }

  return (
    <>
    
    <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return ( <button key={index}
                          style = {{ backgroundColor: curColor }}
                   className={color=== curColor ? "btnStyle active" : "btnStyle"}
                   onClick={() => setColor(curColor)}>
                    {color === curColor ? <FaCheck className="checkStyle" /> : null}
            </button>)
          })}
        </p>
      </div>


      <CartAmountToggle
           amount={amount}
           setDecrease={setDecrease}
           setIncrease={setIncrease}
      />


    <div className="cart-btn">
    {/* <NavLink to='/cart'onClick={() => addToCart(id, color, amount, product)}><button >Add to cart</button></NavLink> */}
    <button onClick={() => addToCart(id, color, amount, product)} >Add to cart</button>
    </div>

    <div className="buy-btn">      
    <NavLink to='/cart' onClick={() => addToCart(id, color, amount, product)} ><button >Buy Now</button></NavLink>
    </div>
      


    </>
  )
}

export default AddToCart
