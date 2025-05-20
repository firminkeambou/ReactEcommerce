import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Checkout = () => {

  const navigate = useNavigate()
  const confirmOrder = (ev) =>{
    //console.log(ev)
    navigate('/orderconfirmation')
  }
  return (
    <CheckoutContainer>
        {/* row 1*/}
      <CheckoutTitle>Shipping Checkout</CheckoutTitle>
        {/* row 2*/}
      <CheckoutHeader>
          <h4> Your Details</h4>
      </CheckoutHeader>
      
      <CheckoutHeaderLine />
        {/* row 3*/}
      <CheckoutTable>
            <CheckoutFormLabel> Name</CheckoutFormLabel>
            <input type="text" name="name" />
            <CheckoutFormLabel> Email</CheckoutFormLabel>
            <input type="email" name="email" />
      </CheckoutTable>
        {/* row 4*/}
       <CheckoutHeader>
          <h4> Address Details</h4>
       </CheckoutHeader>
       
       <CheckoutHeaderLine />
        {/* row 5*/}
       <CheckoutTable>
            <CheckoutFormLabel>Copy to shipping</CheckoutFormLabel>
            <CheckoutFormCheckBox type="checkbox"></CheckoutFormCheckBox>
            <CheckoutFormLabel> Billing Adress</CheckoutFormLabel>
            <CheckoutAddress>
              <input type="text" name="billing-address1"></input>
              <input type="text" name="billing-address2"></input>
              <input type="text" name="billing-city"></input>
            </CheckoutAddress>
            <CheckoutFormLabel>  Shipping Adress</CheckoutFormLabel>
            <CheckoutAddress>
              <input type="text" name="shipping-address1"></input>
              <input type="text" name="shipping-address2"></input>
              <input type="text" name="shipping-city"></input>
            </CheckoutAddress>
        </CheckoutTable>
        {/** 6 */}
        <CancelButton onClick={() => navigate('/basket')}>
            Cancel
        </CancelButton>
        <CheckoutButton onClick={confirmOrder}>
            Confirm order
        </CheckoutButton>
    </CheckoutContainer>
  )
}

export default Checkout

const CheckoutContainer= styled.div`
display: grid;
padding: 20px;
grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr ;
grid-template-columns: 0.1fr 1fr 0.1fr ;
`
const CheckoutTable= styled.div`
grid-column: 1 / span 3;
display: grid;
grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr ;
grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
column-gap: 10px;
padding-left: 10px;
`
const CheckoutHeader= styled.div`
grid-column: 1 / span 3;
padding-top: 20px;
`

const CheckoutHeaderLine = styled.hr`
  grid-column: 1 / span3;
  margin-bottom: 20px;
  border: 1px solid gray;
`
const CheckoutTitle = styled.h2`
  grid-column: 1 / span 3;
  padding-bottom: 20px;
`
const CheckoutAddress= styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
row-gap: 10px;
`
const CheckoutFormLabel = styled.label`
justify-self: end;
`
const CheckoutFormCheckBox = styled.input`
grid-column: 2 / span 3;
justify-self: start;
margin-bottom: 20px;
`
const CheckoutButton = styled.button`
border-radius: 8px;
height: 40px;
grid-column: 3;
}
`
const CancelButton = styled.button`
border-radius: 8px;
height: 40px;
grid-column: 1;

`

