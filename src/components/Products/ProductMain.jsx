import React from 'react'
import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductList from './ProductList'
import './product.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductMain () {

  toast.info("Click on the product to know more");

  return (
    <>
    
    <div className="product-container">
    <div className='product-view-filter'> <FilterSection/>  </div>

   <div className="product-view-sort">

            <div className="sort-filter">
                    <Sort/>
            </div>
            <div className="main-product">
                    <ProductList/>
            </div>
   </div>
   </div> 
 

  <ToastContainer/>

    
    </>
  )
}

export default ProductMain