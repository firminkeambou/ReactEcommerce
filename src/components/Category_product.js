import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CategoryProduct = ({id,title,image,specs,features,price,stock,description}) => {
    let navigate = useNavigate();
    console.log(`./assets/${image}`)
  return (
    <main>
        <div className='category-product-title'>
        <Link to={`products/${id}`}> {title} </Link> 
         {/** <div className='label-clik' onClick={() => navigate(`products/${id}`)}>{title} </div>*/}   
        </div>
        <div className='product-container'>
            <figure>
                <div className='category-product-image-container'>
                    <img src={`./assets/${image}`} alt={title} />
                </div>
            </figure>
            <aside >
                    <div className='category-product-info-dimensions'>
                        <h3> Dimensions</h3>
                        <label>{specs.dimensions}</label>
                    </div>
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
                    <button  className='button-clik' onClick={() => navigate(`products/${id}`)}>View Product</button>
                    <button>Add to Basket</button>
                </div>
             </aside>
       </div>
       
    </main>
  )
}

export default CategoryProduct