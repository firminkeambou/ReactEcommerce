import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { HomeIcon,CartIcon } from './icons'
import Search from './search'
const Layout = ({categories}) => {

    const renderCategories = () =>{
        return categories.data.map(elt => <li key={elt.id}> <Link to={`categories/${elt.id}`}>{elt.title} </Link></li>)
      }
    
  return (
        <div className='maincontainer'>
    
        <header> 
          <div id="headerHomeIcon">
           <Link to='/'><HomeIcon width={40} /></Link> 
          </div>
           <Search />
          <div id="headerTitle"> Our Store</div>
          <div id="headerCartIcon">
            <Link to='/basket'><CartIcon width={40} /></Link>
          </div>
          
        </header>
    
        <section>
          <nav>
            {categories.errorMessage && <div> Error: {categories.errorMessage}</div>}
            <ul>
              {categories.data && renderCategories() /*stands for if (categories!== undefined) then renderCategories()*/}
            </ul>
          </nav>
          <article>
            
               <Outlet />
          </article>
        </section>
        <footer>
          <Link to="/" className='colorLink'> Home</Link>  |  <Link to="/basket">Basket</Link>
        </footer>
        
        </div>
  )
}

export default Layout