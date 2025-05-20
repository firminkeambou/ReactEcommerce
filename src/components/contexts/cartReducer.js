// "state" here  = the previous state, or just the state before calling a reducer
// action = remove, add, delete, ...
// "action" in the reducer function is the parameter of   dispatch function, that triggers the reducer

const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems:[]))
}

export const CartReducer = (prevState,action) => { // "action" is the variable(type and payload) passed in by the dispatcher
    
    let index = -1;
    
    if (action.payload)
         index = prevState.cartItems.findIndex(x => x.id === action.payload.id);

    let newState = {...prevState,cartItems:[...prevState.cartItems]}
    switch (action.type) {
        case "ADD":
        case "INCQTY" :
           if (index === -1 ){ // -1 means index doesn't exist
               console.log(prevState)
                //prevState.cartItems.push({...action.payload, quantity:1})
                
                //prevState.cartItems.push({...action.payload, quantity:1}) // bad way
                //let cartItems = {...prevState.cartItems}
               ////////////////// let newState = {...prevState,cartItems:[...prevState.cartItems]}
                //Object.assign({},prevState) 
                newState.cartItems.push({...action.payload, quantity:1})
                
                //console.log('temp',newState)
                //console.log('normal',prevState)
               // console.log(newState.cartItems === prevState.cartItems)
               //////////////return newState
                
           }else{
                            //prevState.cartItems[index].quantity++
                ////let newState = {...prevState,cartItems:[...prevState.cartItems]}
                newState.cartItems[index].quantity++
                /////////return newState

           }
           break;
           
        case "REMOVE":
            if (index > -1){
               //// let newState = {...prevState,cartItems:[...prevState.cartItems]}
                newState.cartItems.splice(index,1)  // remove one elt at "index"
                /////////////return newState
            }
            break;
        case "DECQTY":
            if (index > -1){
                /////let newState = {...prevState,cartItems:[...prevState.cartItems]}
                if  (newState.cartItems[index].quantity > 1 ) {
                        newState.cartItems[index].quantity--  // remove one elt at "index"
                ///////////////////return newState
                } /*else {
                    
                    return newState
                }*/
            }
            break;
            
        case "CLEAR":
           ///// let newState = {...prevState,cartItems:[...prevState.cartItems]}
            newState.cartItems = []
            ///////////////////return newState
            break;
        default:
          //return prevState
    }
    Storage(newState.cartItems)  // adding cart as a session storage
    return newState
}