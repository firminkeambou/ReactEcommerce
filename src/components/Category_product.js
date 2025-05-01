import React from 'react'

const CategoryProduct = ({title,image,specs,features,price,stock,description}) => {
  return (
    <main>
        <div className='category-product-title'>
            {title}
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
                        {<li>{description}</li>}
                        {features?.map( featur => <div><li> {featur}</li></div>) /** features?  means if map exist*/}
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
                    <button>View Product</button>
                    <button>Add to Basket</button>
                </div>
             </aside>
       </div>
       
    </main>
  )
}

export default CategoryProduct