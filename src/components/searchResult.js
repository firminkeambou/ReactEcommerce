import React,{useState,useEffect} from 'react'
import { getProductsByQuery } from '../fetcher'
import { useSearchParams } from 'react-router-dom'
import CategoryProduct from './Category_product'

const SearchResults = () => {
     const [products, setProducts] = useState({errorMessage:'' , data :[]})
     const [searchParams] = useSearchParams() //same as useParams, but we collect parameters come after a question mark (?), also, parameters here are not declared in the Route in the routing section of the App
     const query = searchParams.get('q')  // fulltext search with fake API json-server version V0.17 "?q=="
    // const query1 = searchParams.get('g')
     console.log(query)
     // console.log(query1)
     useEffect( () => {
              const fetchData =  async () => {
                const responseObject = await getProductsByQuery(query)
                setProducts(responseObject);
              }
              fetchData()
            },[query]);

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

export default SearchResults