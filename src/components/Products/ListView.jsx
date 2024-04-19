import React from 'react'
import Product from '../Home/Product';
import FormatPrice from '../../Helper/FormatPrice';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

function ListView({products}) {
  return (


    <div className="list-section">

            <div className="list-container">

            {products.map((curElem) => {
                const { id, name, image, price, description } = curElem;
                return (


                    <div className="list-item">    
                    <div className="card-list-column">
                    <figure>
                        <img src={image} alt={name} />
                    </figure>

                    <div className="list-card-data">
                      <div className="name-price">
                        <h3>{name}</h3>
                        <p className='price'>
                        <FormatPrice price={price} />
                        </p>
                        </div>
                        <p className='desc'>{description.slice(0, 90)}...</p>

                        <NavLink to ={`/singleproduct/${id}`}> <Button  text='Read More'></Button></NavLink>            

            </div>
            </div>

    </div>
           

          );
        })}

           

    </div>


</div>
  )
}

export default ListView