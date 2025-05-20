import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";

// a context returns a consumer and a provider
export const CartContext = createContext();
//we use "JSON.PARSE"  to convert back what we used "JSON.stringify"  to serialize
const storage = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]

const initialState = { cartItems : storage}

const CartContextProvider = ({children}) => {

    // calling a useReducer ( a "state" here will be the modified and final state after the operation")
    const [state, dispatch] = useReducer(CartReducer,initialState) // the dispatch function trigger the reducer which is simply a function
    
    // the below funtion is the callback that will update the state
    // dispatch is what allows us to call our reducer
    const addProduct = payload => {
        // the dispatch function trigger the reducer
        dispatch({type: 'ADD', payload})  // what is dispatched is called " action" (stuff passed to dispatch)
        //debugger
    }
    const removeProduct = payload => {
        dispatch({type: 'REMOVE', payload})
    }

    const increaseQuantity = payload => {
        dispatch({type:'INCQTY', payload})
    }
    const decreaseQuantity = payload => {
        if(payload.quantity === 1)
            return alert(`only ${payload.quantity} item remains, you can't decrease further, delete instead`)
        dispatch({type:'DECQTY', payload})
    }

    const clearBasket = () => {
        dispatch({type:'CLEAR', payload:undefined})
    }
    const getItems = () => {
        return state.cartItems;
    }
  // providing the function to update a state and copie of the initial state, by passing them to <CartContext.Provider>, we make them available for the entire app
  // exposing methods so our App can access them  
  const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
        getItems,
        ...state // this is always the current state, as he is the one available for the entire Application
    }

    //console.log(CartContext)
    return (
        <CartContext.Provider value={contextValues} > {/** providing methods to our provider */}
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider