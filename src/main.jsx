import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Context/Productcontext.jsx'
import { FilterContextProvider } from './Context/FilterContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>


<Auth0Provider
    domain="dev-i4t6go7grrhd3srl.us.auth0.com"
    clientId="OgR3WGgbfglz9Ne1mRE4fQmmOa0U6zRw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >


    
    <AppProvider>

     <FilterContextProvider>

          <CartProvider>

                <App /> 


          </CartProvider>

           
     </FilterContextProvider>
 
    
    </AppProvider>

    </Auth0Provider>
    
  </React.StrictMode>,
)
