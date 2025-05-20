
import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { CartContext } from './contexts/cartContext';


const CategoryProduct = ({id,title,image,specs,features,price,stock,description}) => {
    const navigate = useNavigate();
    // receiving contextValues (callback and initialState)
    //const cartContext = useContext(CartContext)
    const {addProduct} = useContext(CartContext)  // destructuring to only have function addProduct()
    
    //console.log(`./assets/${image}`)
    //console.log (addProduct)
  return (
    <main>
        <ProductTitle >
        <Link to={`/products/${id}`}> {title} </Link> {/** we use `/products/${id}` instead of simply `products/${id}` because we got here from another link, so now, the path should be absolute */}
         {/** <div className='label-clik' onClick={() => navigate(`products/${id}`)}>{title} </div>*/}   
        </ProductTitle>
        <div className='product-container'>
            <figure>
                < ProductImageContainer>
                    <ProductImageContainerImage src={`/assets/${image}`} alt={title} />
                </ProductImageContainer>
            </figure>
            <aside >
                    <ProductInfoDimension>
                        <ProductInfoDimensionHeader> Dimensions</ProductInfoDimensionHeader>
                        <label>{specs.dimensions}</label>
                    </ProductInfoDimension>
                    {specs.capacity && /* if capacity doesn't exist */
                    <div className='category-product-info-capacity'>
                        <h3> Capacity</h3>
                        <label>{specs.capacity}</label>
                    </div>
                    }
                    <div className='category-product-info-features'>
                    <h3>Features</h3>
                     
                    <ul>
                    {<li key='feature100'>{description}</li>}
                        {features?.map( (featur,i) => {
                            
                            return <li key ={`feature${i}`}> {featur}</li>}) /** features?   means if map exist*/}
                    </ul>
                </div>
             </aside>
             <aside>
            
                <div className='category-product-info-finance-price'>
                    &pound;{price}
                </div>
                <div className='category-product-info-stock'>
                    <label> Stock Level: {stock}</label>
                    <label>Free Delivery</label>
                </div>
                <div className='category-product-action'>
                    <button  className='button-clik' onClick={() => navigate(`/products/${id}`)}>View Product</button>
                    <button className='button-clik' onClick={() => addProduct({id,title,price})}>Add to Basket</button>
                </div>
             </aside>
       </div>
       
    </main>
  )
}

export default CategoryProduct

// the below ProductTile style the "div" element 
// using style component is one way to avoid using CSS
//div className='category-product-title' is replaced by "ProductTitle"
const ProductTitle = styled.div`
/*grid-column: 1 / span 3;*/
  color: darkslategray;
  font-weight: bold;
  font-size: 25px;
  padding-left: 2px;
  margin-bottom: 30px;
  margin-left: 18px;
` ;
//div className='category-product-image-container' is replaced by "ProductImageContainer"
const ProductImageContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`;
// img is replaced by "ProductImageContainerImage"
const ProductImageContainerImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`
//div className='category-product-info-dimensions'
const ProductInfoDimension = styled.div`
 display: flex;
  flex-direction: column;
`
const ProductInfoDimensionHeader = styled.h3`
color: darkslategray;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 5px;
  `