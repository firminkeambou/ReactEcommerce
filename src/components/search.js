import React from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

   const navigate = useNavigate()
   const handleChange = ev =>{
        //navigate('/search?q=freee&&g=20')
        navigate('/search?q=' + ev.target.value)  // fulltext search with fake API json-server version V0.17  "?q=="
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
