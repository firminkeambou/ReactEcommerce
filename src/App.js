//import logo from './logo.svg';

import { useEffect, useState ,} from 'react';
//import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Category from './components/Category';
import Layout from './components/layout';
//import Category from './components/Category';
import { getCategories } from './fetcher'; //,getProducts
import Home from './components/Home';
import OrderConfirmation from './components/orderconfirmation';

import SearchResults from './components/searchResult';
//import CategoryProduct from './components/Category_product';

function App() {
  const [categories, setCategories] = useState({errorMessage:'' , data :[]})
 // const [products, setProducts] = useState({errorMessage:'' , data :[]})
  //const [productClicked , setProductClicked] = useState(false)

  useEffect( () => {
    const fetchData =  async () => {
      const responseObject = await getCategories()
      setCategories(responseObject);
    }
    fetchData()
  },[])

  /*const handleCategoryClick =  id => {
    const fetchData =  async () => {
      const responseObject = await getProducts(id)
      //console.log(responseObject)
      setProducts(responseObject)
      
    }
    //setProductClicked (true)
    fetchData()   
  }*/


  // rendering each category as a component as we may to treat each one differently

  //+++++++++++ rendering version 1

  /*const renderCategories = () =>{
    return categories.map(elt => <Category key={elt.id} id={elt.id} title={elt.title}/> )
  } */

  //++++++++ rendering version 2 with a for loop
  /*
        const renderCategories = () => {
          let catFinal=[]
          for (let i=0; i< categories.data.length; i++){
            let cat = categories.data[i]
            catFinal.push(<Category onCategoryClick={() => handleCategoryClick(cat.id)} key={cat.id} id={cat.id} title={cat.title}/>)
          }
          return catFinal
        } 
    */
   //++++++++ rendering version 3 using react router ( the way to go)

// <Route index element={<Home />} />   == "index" here means  first component to be loaded in React Router
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout categories={categories}/> } > 
          <Route index element={<Home />} />
          <Route path='basket' element={<Basket />}/>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='orderconfirmation' element={<OrderConfirmation />}></Route>
          <Route path='search' element={<SearchResults />}/>
          <Route
               path='products/:productId' 
               element={<ProductDetails />}
           />
          <Route 
              path='categories/:categoryId'
              element={<Category />}
           />
        </Route>
      </Routes>  
  </BrowserRouter>
    </>
  );
}

export default App;
