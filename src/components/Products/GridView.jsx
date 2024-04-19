import React from 'react'
import Product from '../Home/Product';
import './product.css'


function GridView({products}) {
  return (
    <>
    
    <div className="grid-section">

            <div className="grid-container">

                    {products.map((curElem) => {
                        return <Product  key={curElem.id} {...curElem}/> ;
                    })}               

            </div>


    </div>
    
    </>
  )
}

export default GridView