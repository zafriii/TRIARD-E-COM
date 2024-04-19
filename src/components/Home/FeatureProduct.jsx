import React from 'react'
import { useProductContext } from '../../Context/Productcontext'
import Product from './Product';
import './feature.css'


function FeatureProduct() {

  const { isLoading, featureProducts } = useProductContext();
  

  if (isLoading) {
    return <div className='loading'> ......Loading </div>;
  }

  return (
    <>
    
    <div className="section">
    <div className="feature-container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Products</div>

        <div className="pic-container">

          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
            
          })}

         </div>    

    </div>
    </div>
    
    </>
  )
}

export default FeatureProduct