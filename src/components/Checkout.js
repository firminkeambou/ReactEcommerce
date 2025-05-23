import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Checkout = () => {

  const [form, setForm] = useState({
    name:'',
    email: '',
    shippingAddress1:'',
    touched :{
      name:false,
      email:false,
      shippingAddress1: false
    }
  })

  const navigate = useNavigate()
  const errors = {
      name: form.name.length === 0,
      email: form.email.length === 0,
      shippingAddress1 : form.shippingAddress1.length === 0
  }
   // the below code returns false only when all the value of the form are false

  const disabled =  Object.keys(errors).some((x)=> errors[x])

  const handleChange = (ev) => {
    console.log(ev.target.name)
    const {name,value} = ev.target;
  
    setForm((prevState) =>{
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  const handleSubmit = (ev) => {
    //check if all the required fields alre filled
    if (disabled ) { // we true as long as there is a non fill up field
      ev.preventDefault();
      alert('fill out the form')
      return;
    }
    console.log(form)
    navigate('/orderconfirmation')
  }
//""...form.touched" is done because React only makes a shallow copie
const handleBlur= (ev) => {
  const {name} = ev.target;
  
    setForm((prevState) =>{
      return {
        ...prevState,
        touched:{
                ...form.touched,
                  [name]:true
               }
      }
    })

}

const showError = field => errors[field] ?form.touched[field]: false  ;  // what a great and nice function
  

  return (
    <form onSubmit={handleSubmit}>
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
            <CheckoutFormLabel> Name *</CheckoutFormLabel>
            <CheckoutFormInput 
              type="text" name="name" 
              onChange={handleChange}
              placeholder='Enter name' 
              invalid={showError("name")}  
              onBlur={handleBlur}
            />
            <CheckoutFormLabel> Email *</CheckoutFormLabel>
            <CheckoutFormInput 
              type="email" 
              name="email" 
              onChange={handleChange} 
              placeholder='Enter Email'
              invalid={showError("email")} 
              onBlur={handleBlur}
            />
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
              <input type="text" name="billingAddress1"></input>
              <input type="text" name="billingAddress2"></input>
              <input type="text" name="billingCity"></input>
            </CheckoutAddress>
            <CheckoutFormLabel>  Shipping Adress *</CheckoutFormLabel>
            <CheckoutAddress>
              <CheckoutFormInput 
              type="text" name="shippingAddress1" 
              onChange={handleChange}  
              placeholder='Enter First Line'
              invalid={showError("shippingAddress1")} 
              onBlur={handleBlur}
              >

              </CheckoutFormInput>
              <input type="text" name="shippingAddress2"></input>
              <input type="text" name="shippingCity"></input>
            </CheckoutAddress>
        </CheckoutTable>
        {/** 6 */}
         
        <CancelButton onClick={() => navigate('/basket')}>
            Cancel
        </CancelButton>
       <CheckoutButton disabled ={disabled}>
            Confirm order
        </CheckoutButton>
       
       {/**renderConfirButton()*/}
        
    
    </CheckoutContainer>
    </form>
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
//"props" here refers to local props to "CheckoutFormInput" styled component, not to global props

const CheckoutFormInput = styled.input`
${(props) => props.invalid &&
  `
    border-color: red;
    border-width :3px;
  
  `};
   border-style: solid;
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

