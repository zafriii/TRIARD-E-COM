import React from "react";
import { NavLink } from "react-router-dom";
import './feature.css'
import FormatPrice from "../../Helper/FormatPrice";

const Product = (curElem) => {

  const {id, name, image, price, category } = curElem;
  return (

    <NavLink to={`/singleproduct/${id}`}>

      <div className="card">

        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-text">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
          {/* <button>Add</button> */}
          <div className="add-btns">
              <button>Add</button>
              
          </div>
        </div>
      </div>

    </NavLink>

  )
}

export default Product;