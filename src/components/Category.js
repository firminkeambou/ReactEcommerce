import React from 'react'

const  Category = ({id,title,onCategoryClick}) => {
    

  return (
  <>
    <div  id={id} onClick={onCategoryClick}>{title}</div>
  </>
  )
}

export default Category

/*{
    results.map( (elt) => 
      <div key={elt.id}>{elt.title}</div>
    )
  }*/