import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useCartContext } from '../Context/CartContext';
import { FiShoppingCart } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  
  const { cart, total_item: totalItemCount } = useCartContext();
  const total_item = totalItemCount !== undefined ? totalItemCount : (cart ? cart.length : 0);

  const {user, isAuthenticated,  loginWithRedirect , logout} = useAuth0();


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>TRIARD</h1>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
        <NavLink to="/products" onClick={toggleMenu}>
          Products
        </NavLink>

        <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={toggleMenu}>
              <FiShoppingCart className="cart-trolley" />
               <span className="cart-total--item"> {total_item} </span>
        </NavLink>

      </div>


      <div className="nav-btns">

      {

         isAuthenticated && <p className='username'>{user.name}</p>

      }

      {

      isAuthenticated ? (

            <button className='auth-btns' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>

      ) : (

        <button className='auth-btns' onClick={() => loginWithRedirect()}>Log In</button>


      )

    }
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>
    </div>
  );
}

export default Navbar;
