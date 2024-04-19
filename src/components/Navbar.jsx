// import React , {useState} from 'react'
// import { NavLink } from "react-router-dom";
// import { FiShoppingCart } from "react-icons/fi";
// import { CgMenu, CgClose } from "react-icons/cg";
// import './navbar.css'
// import { useCartContext } from '../../Context/CartContext';
// import { useAuth0 } from "@auth0/auth0-react";
// import Button from '../Button';

// function Navbar() {

//   const [menuIcon, setMenuIcon] = useState();

//   const { cart } = useCartContext();
//   const total_item = cart == null ? 0 : cart.length;

//   const {user, isAuthenticated,  loginWithRedirect , logout} = useAuth0();


//   return (
//     <>
    
//     <nav>

//     <div className={menuIcon ? "navbar active" : "navbar"}>

//     <div className="header">

//     <div className="nav-logo">


//     <NavLink to='/' className="logo">N-Ecommerce</NavLink>


//    </div>

//     <ul className="navbar-lists">

    

//     <div className="nav-links">

//     <li>

//        <NavLink to="/" className="navbar-link">Home</NavLink>

//     </li>


//     <li>

//        <NavLink to="/about" className="navbar-link">About</NavLink>

//     </li>

//     <li>

//        <NavLink to="/products" className="navbar-link">Products</NavLink>

//     </li>

//     <li>

//        <NavLink to="/contact" className="navbar-link">Contact</NavLink>

//     </li>


//     {

//         isAuthenticated && <p className='username'>{user.name}</p>

//     }



//     {

//           isAuthenticated ? (

//                 <li>

//                 <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//                   Log Out
//                 </button>

//                 </li>


//           ) : (

//             <li>

//             <button className='login' onClick={() => loginWithRedirect()}>Log In</button>
        
//             </li>


//           )


//     }



//     <li>
//             <NavLink to="/cart" className="navbar-link cart-trolley--link">
//               <FiShoppingCart className="cart-trolley" />
//               <span className="cart-total--item"> {total_item} </span>
//             </NavLink>
//     </li>

//     </div>
          
//     </ul>


//     <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setMenuIcon(true)}
//           />

//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setMenuIcon(false)}
//           />

//     </div>

//         </div>

//         </div>        

//     </nav>
    

//     </>
//   )
// }



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useCartContext } from '../Context/CartContext';
import { FiShoppingCart } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
  
  // const { cart } = useCartContext();
  // const total_item = cart == null ? 0 : cart.length;

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
