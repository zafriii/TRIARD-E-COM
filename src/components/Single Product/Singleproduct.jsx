import React from 'react'
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../../Context/Productcontext";
import FormatPrice from "../../Helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import './singleproduct.css'
import MyImage from './MyImage';
import Star from './Star';
import Button from '../Button';
import AddToCart from '../Cart/AddToCart';


const API = "https://api.pujakaitem.com/api/products";



function Singleproduct() {


    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

    const { id } = useParams();

    const {
        id: alias,
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image
      } = singleProduct;

      useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
      }, []);


      if (isSingleLoading) {
        return <div className="page_loading">Loading.....</div>;
      }
    

      return (

      <>
      
          <div className='single-heading'> <h1 > {name} </h1> </div>

          <div className="single-container">

          <div className="single-contents">
         
          <div className="product-images">
              <MyImage imgs={image}/>
          </div>


          <div className="product-data">

                 <h2>{name}</h2>

                 <Star stars={stars} reviews= {reviews}/>
                 
                 
                 <p className="product-data-price">
                     
                 
                 MRP:  <del>  <FormatPrice price={price + 250000} /> </del>
                    
                </p>  

               <div className="product-data-real-price">
                 <p> Deal of the Day: <FormatPrice price={price} /></p>
                </div>

                <p>{description}</p> 


                 <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Product Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div> 


             <div className="product-data-info"> 
             <p>
                Available:<span> {stock > 0 ? "In Stock" : "Not Available"}</span>
            </p>

            {/* <p>
                ID : <span> {id} </span>
            </p> */}

            <p>
                Brand :<span> {company} </span>
            </p>

             </div>


             {stock > 0 && <AddToCart product={singleProduct} />}

          


          </div>

          </div>

          </div>
      
          
      </>
     
        
      
      )

 
}

 
export default Singleproduct