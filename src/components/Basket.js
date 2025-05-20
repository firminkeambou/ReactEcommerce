import React, { useContext } from 'react'
import styled from 'styled-components';
import { CartContext } from './contexts/cartContext';
import { Link,useNavigate } from 'react-router-dom';
import { DownIcon, TrashIcon, UpIcon } from './icons';

const Basket = () => {
   const navigate = useNavigate()
   
   const {getItems,
         clearBasket,
         removeProduct,
        increaseQuantity,
        decreaseQuantity,cartItems} = useContext(CartContext) 
   //const  cartItems = getItems()
   
   //console.log('state', useContext(CartContext))
    // for this render function, Return is mandatory. a function in javaScript always needs a return clause
  // <>  === short hand for react Fragment
    const renderCart = ()=>{
    
        if (cartItems.length > 0){
              return cartItems.map( (p) => {
                    return (
                      <React.Fragment key={p.id}>
                       
                        <Link to={`/products/${p.id}`}>{p.title}</Link>
                        
                        <BasketQty>
                            {p.quantity} 
                            <UpIcon width={20} onClick={() => increaseQuantity({id:p.id})}/>
                            <DownIcon width={20} onClick={() => decreaseQuantity({id:p.id,quantity:p.quantity})}/>
                            <TrashIcon  width={20} onClick={() => removeProduct({id:p.id})}/>
                        </BasketQty>
                        <BasketPrice>
                          CFA {p.price} 
                        </BasketPrice>
                      </React.Fragment>
                    )
                })
     
      }else {
          return <h3>Sorry,  the Basket is Empty at the moment </h3>
      }
  }
// render Total version 1
        /*  const renderTotal = () => {
            let total=0
            if (cartItems.length > 0){
              for (let i=0; i<cartItems.length;i++){
                if (cartItems[i].quantity)
                total +=  parseInt(cartItems[i].price) * parseInt(cartItems[i].quantity)
              }
            }
            return total
          }*/
// render total version2
const renderTotal = () => {
     let total = cartItems.reduce((total,item) => (total + (item.price * item.quantity)),0)
       return total
      }

  return (
    <BasketContainer>
      {/*First Line*/}
      <BasketTitle> Shopping Basket</BasketTitle>
      <BasketButton onClick={()=>navigate('/checkout')}> Checkout </BasketButton>
      {/*Second Line*/}
      <BasketTable>
        <BasketHeader>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Unit Price</h4>
        </BasketHeader>
        <BasketHeaderLine />
        <BasketHeader>
          {renderCart()}
        </BasketHeader>
        <BasketHeaderLine />
      </BasketTable>
      {/*Third Line*/}
      <BasketButton onClick={() => clearBasket()}> Clear </BasketButton>
      <BasketTotal>Total: CFA {renderTotal().toLocaleString()} </BasketTotal>
    </BasketContainer>
  )
}

export default Basket

const BasketContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`
const BasketTable = styled.div`
  grid-column: 1 / span 3;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`
const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
`
const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`
const BasketTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
`
const BasketQty = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`
const BasketPrice = styled.h3`
  font-size: 20px;
  font-weight: bold;
`
const BasketTotal = styled.h2`
  justify-self: end;
`
const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
`