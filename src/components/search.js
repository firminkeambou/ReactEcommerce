import React from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
   const [searchTem, setSearchTerm] =React.useState('')
   const navigate = useNavigate()
   React.useEffect(() =>{
    const delay = setTimeout(() => {
      if (searchTem){
          navigate('/search?q=' + searchTem)  
          setSearchTerm('')
      }
    },500)
    return () => clearTimeout(delay); // this 'return' it was help us to clean up connections to database or clear a timeout
   },[searchTem,navigate])
   // the use of "useEffect" here is something called debouncing which consist of waiting for a certain time before making a call to the API after the component is loaded
   const handleChange = ev =>{
        setSearchTerm(ev.target.value)
        //navigate('/search?q=freee&&g=20')
       // navigate('/search?q=' + ev.target.value)  // fulltext search with fake API json-server version V0.17  "?q=="
        //console.log(ev) 
        
    }

  return (
    <div id='search'>
        <label>Search</label>
        <input type='text' name='search' onChange={handleChange} />
    </div>
  )
}

export default Search
