//import logo from './logo.svg';

import { useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import { getCategories,getProducts } from './fetcher';
import CategoryProduct from './components/Category_product';

function App() {
  const [categories, setCategories] = useState({errorMessage:'' , data :[]})
  const [products, setProducts] = useState({errorMessage:'' , data :[]})
  const [productClicked , setProductClicked] = useState(false)

  useEffect( () => {
    const fetchData =  async () => {
      const responseObject = await getCategories()
      setCategories(responseObject);
    }
    fetchData()
  },[])

  const handleCategoryClick =  id => {
    const fetchData =  async () => {
      const responseObject = await getProducts(id)
      //console.log(responseObject)
      setProducts(responseObject)
      
    }
    setProductClicked (true)
    fetchData()   
  }


  // rendering each category as a component as we may to treat each one differently

  //+++++++++++ rendering version 1

  /*const renderCategories = () =>{
    return categories.map(elt => <Category key={elt.id} id={elt.id} title={elt.title}/> )
  } */

  //++++++++ rendering version 2 with a for loop
  const renderCategories = () => {
    let catFinal=[]
    for (let i=0; i< categories.data.length; i++){
      let cat = categories.data[i]
      catFinal.push(<Category onCategoryClick={() => handleCategoryClick(cat.id)} key={cat.id} id={cat.id} title={cat.title}/>)
     }
     return catFinal
  }

  const renderPoducts = () =>{
    
    return products.data.length>=1 ? products.data.map(p =>{ 
      return <CategoryProduct key={p.id} {...p}  />
     }) :<div style={{color:'red'}}>No product found</div>
  }

  return (
    <>

    <header> My Store</header>

    <section>
      <nav>
        {categories.errorMessage && <div> Error: {categories.errorMessage}</div>}
        {categories.data && renderCategories() /*stands for if (categories!== undefined) then renderCategories()*/}
      </nav>
      <article>
        <h1> Products </h1>
        {products.errorMessage && <div> Error: {products.errorMessage}</div>}

        { products.data && productClicked  && renderPoducts()  /*stands for if (products exist) then renderProducts()*/}

      </article>
    </section>
    <footer>
      footer
    </footer>
    
    </>
  );
}

export default App;
