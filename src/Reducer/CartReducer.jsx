function CartReducer(state, action) {

        if (action.type === "ADD_TO_CART") {
            const { id, color, amount, product } = action.payload;
        
            
            const cart = state.cart || [];
        
           
            const existingProductIndex = cart.findIndex(
                (curElem) => curElem.id === id + color
            );
        
            if (existingProductIndex !== -1) {
                
                const updatedCart = [...cart];
                const existingProduct = updatedCart[existingProductIndex];
                const newAmount = existingProduct.amount + amount;
        
                
                if (newAmount >= existingProduct.max) {
                    alert("We don't have that much in stock");
                    existingProduct.amount = existingProduct.max;
                } else {
                    existingProduct.amount = newAmount;
                }
        
                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                
                const newProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock,
                };
        
                return {
                    ...state,
                    cart: [...cart, newProduct],
                };
            }
        }
        
    
    
        if(action.type === "REMOVE_ITEM" && state.cart != null){
    
            let updatedCart = state.cart.filter((curElem) => curElem.id !== action.payload)
    
            return {
                ...state,
                cart: updatedCart
            }  
        }
       
    
        if(action.type === "CART_TOTAL_PRICE" && state.cart != null){
            let total_price = state.cart.reduce((initialVal, curElem) => {
                let {price, amount} = curElem;
                initialVal = initialVal + (price* amount);
                return initialVal;
            }, 0)
    
            return {
                ...state,
                total_price: total_price
            }
        }


        if (action.type === "CART_TOTAL_ITEM" && state.cart != null) {
        let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
        let { amount } = curElem;

        initialVal = initialVal + amount;
        return initialVal;
        }, 0);

        return {
        ...state,
        total_item: updatedItemVal,
        };
    }



    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === action.payload) {
            let decAmount = curElem.amount - 1;
    
            if (decAmount <= 1) {
              decAmount = 1;
            }
    
            return {
              ...curElem,
              amount: decAmount,
            };
          } else {
            return curElem;
          }
        });
        return { ...state, cart: updatedProduct };
      }
    
      if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === action.payload) {
            let incAmount = curElem.amount + 1;
    
            if (incAmount >= curElem.max) {
              incAmount = curElem.max;
            }
    
            return {
              ...curElem,
              amount: incAmount,
            };
          } else {
            return curElem;
          }
        });
        return { ...state, cart: updatedProduct };
      }

    
      return state;
    }
    
    export default CartReducer
    
