import {React,useState,useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../fetcher';
import CategoryProduct from './Category_product';

const  Category = ({id,title,onCategoryClick}) => {
  const [products, setProducts] = useState({errorMessage:'' , data :[]})
     const {categoryId} = useParams();  //getting the parameter sent via an url, "categoryId" must be part of the route set in a routing section of the App, it must be preceded by colon ":"

     useEffect( () => {
         const fetchData =  async () => {
           const responseObject = await getProducts(categoryId)
           setProducts(responseObject);
         }
         fetchData()
       },[categoryId]);

       const renderPoducts = () =>{
    
        return products.data.length>=1 ? products.data.map(p =>{ 
          return <CategoryProduct key={p.id} {...p}  />
         }) :<div style={{color:'red'}}>No product found</div>
      }
    

  return (
  <>
  <h1> Products </h1>
    {products.errorMessage && <div> Error: {products.errorMessage}</div>}

    { products.data   && renderPoducts()  /*stands for if (products exist) then renderProducts()*/}

  </>
  )
}

export default Category

/*{
    results.map( (elt) => 
      <div key={elt.id}>{elt.title}</div>
    )
  }*/