import {createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    list_view: false,
    sorting_value: "lowest",
    filters: {
        text:"" ,
        category: "all",
        company: "all",         
    }
    

}

export const FilterContextProvider = ({children}) => {
    const {products} = useProductContext();
   
    const [state, dispatch] =useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch ({type : "SET_GRID_VIEW"});
    }

    const setListView = () => {
        return dispatch ({type : "SET_LIST_VIEW"});
    }

    const sorting = (event) => {

        let userValue = event.target.value;
        return dispatch ({type : "GET_SORT_VALUE", payload:userValue});
    }

    const updateFilterValue = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        return dispatch ({type : "UPDATE_FILTERS_VALUE", payload: {name, value}})
    }




      useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload:products});
      }, [products, state.sorting_value]);


      useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" , payload:products});
    }, [state.filters]);
 

    useEffect (()=>{
        dispatch ({type:"LOAD_FILTER_PRODUCTS", payload:products});
    }, [products]);

    return(

        <>
        
        <FilterContext.Provider value = {{...state , setGridView , setListView, sorting, updateFilterValue }}>
          {children}
        </FilterContext.Provider>
        
        </>
    )
}

export const useFilterContext = () =>{
            return useContext(FilterContext);
        }
    
