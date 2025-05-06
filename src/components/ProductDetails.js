import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';

const ProductDetails = () => {
    //const params =useParams(); // returns an object  // getting data from the link
    // we can also destructure "params" as follow instead of having a total global object
  
    const [product, setProduct] = React.useState({errorMessage:'' , data :{}})
    const {productId} = useParams();  // destructuring params
  
  React.useEffect( () => {
    const fetchData =  async () => {
      const responseObject = await getProductById(productId)
      setProduct(responseObject);
    }
    fetchData()
  },[productId])
      
  return (
    <main>
        
           <div className='category-product-title'>
                {product.data.title} 
             {/** <div className='label-clik' onClick={() => navigate(`products/${id}`)}>{title} </div>*/}   
            </div>
            <div className='product-container'>
                <figure>
                    <div className='category-product-image-container'>
                        {/** when in this page the Url is :http://localhost:3000/products, this is why we  use "../assets" instead of "./assets/" */}
                        <img src={`../assets/${product.data?.image}`} alt={product.data.title} />
                    </div>
                </figure>
                <aside >
                        <div className='category-product-info-dimensions'>
                            <h3> Dimensions</h3>
                            <label>{product.data.specs?.dimensions}</label>
                        </div>
                        {product.data.specs?.capacity && /* if capacity doesn't exist */
                        <div className='category-product-info-capacity'>
                            <h3> Capacity</h3>
                            <label>{product.data.specs?.capacity}</label>
                        </div>
                        }
                        <div className='category-product-info-features'>
                        <h3>Features</h3>
                         
                        <ul>
                        {<li key='feature100'>{product.data?.description}</li>}
                            {product.data.features?.map( (featur,i) => {
                                
                                return <li key ={`feature${i}`}> {featur}</li>}) /** features?   means if map exist*/}
                        </ul>
                    </div>
                 </aside>
                 <aside>
                
                    <div className='category-product-info-finance-price'>
                        &pound;{product.data.price}
                    </div>
                    <div className='category-product-info-stock'>
                        <label> Stock Level: {product.data.stock}</label>
                        <label>Free Delivery</label>
                    </div>
                    <div className='category-product-action'>
                        <button  className='button-clik' >View Product</button>
                        <button>Add to Basket</button>
                    </div>
                 </aside>
           </div>
           <div className='description'>{product.data?.description}</div>
           
        </main>
  )
}

export default ProductDetails