import React , {useState} from 'react'
import { useFilterContext } from '../../Context/FilterContext'
import Button from '../Button';
import FormatPrice from "../../Helper/FormatPrice";


function FilterSection() {

const  {filters: {text, category } , updateFilterValue ,  all_products, filter_products, clearFilters} = useFilterContext();

const getUniqueData = (data, property) => {

  let newVal = data.map((curElem) =>
   {
    return curElem[property];

  })

    return  (newVal = ['all', ...new Set(newVal)]);

}

const categoryData = getUniqueData( all_products , "category");

const companyData = getUniqueData( all_products , "company");




  return (
    <>

    <div className="filter">

      <h2>Shop By</h2>

    <div className="filter-products">
   
    <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search here..."
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">

             <h3>Category</h3>

             <div>

            {categoryData.map((curElem, index) => {

            return (

              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}>
                {curElem}

              </button>
            );
          })}
    
         </div>
         </div>


         <div className="filter-company">

              <h3>Company / Brand</h3>


                    <form action = '#'>

                        <select
                        name = "company"
                        id = "company"
                        className='filter-company-select'
                        onClick={updateFilterValue}>


                         {companyData.map((curElem, index) => {

                                return <option key={index} value={curElem} name="company">{curElem}</option>
                         })}

                        </select>

                    </form>
           
         </div>
      
         <div className="available">
           <h4>Availability</h4>
           <h4>In Stock : {filter_products.length} Gadgets</h4>

            <button onClick={clearFilters} className="btn-clear-filters">Clear Filters</button>
         </div>

      </div>

      </div>


    </>
  )
}

export default FilterSection



