import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../Reducer/CartReducer'

const CartContext = createContext();

const getLocalCartData = () =>{

        let newCartdata = localStorage.getItem("nCart");

        if (newCartdata == []){
            return [];
        }
        else{
            return JSON.parse(newCartdata);
        }
}

const initialState = {
    // cart:[],

    cart: getLocalCartData(),

    total_item: "",
    total_price:"",
    total_amount: "",
    shipping_fee: 50000
}

const CartProvider = ({ children }) => {

const [state, dispatch] = useReducer(reducer, initialState)

const  addToCart = (id, color, amount, product) =>{
        dispatch ({type: "ADD_TO_CART", payload: {id, color, amount, product}});
}



const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };




const removeItem = (id) => {
    dispatch ({type: "REMOVE_ITEM", payload: id});
}

useEffect(() => {
    dispatch ({type: "CART_TOTAL_ITEM"});
    dispatch ({type: "CART_TOTAL_PRICE"});
    localStorage.setItem("nCart", JSON.stringify(state.cart))
}, [state.cart])


    return <CartContext.Provider value={{...state, addToCart, removeItem , setDecrease, setIncrease}}>{children}</CartContext.Provider>
}

const useCartContext = () =>{
    
    return useContext(CartContext);
}


export {CartProvider, useCartContext}

