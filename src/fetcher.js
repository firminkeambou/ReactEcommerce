const BASE_URL = "http://localhost:3001/"
export const fetcher = async (url) => {
   // console.log(BASE_URL + url)
   let responseObject = {
    errorMessage:'' , data :[]
   }
   try {
    
    const response = await fetch(BASE_URL + url);
    if (!response.ok){
        throw new Error(`HTTP Error ${response.status}`)  // raise an error that needs to be handle down below
    }
    const responseData = await response.json()
    responseObject.errorMessage =''
    responseObject.data = responseData  
   } catch (error) {
    responseObject.errorMessage = error.message
    console.log(responseObject)
   }
   return responseObject
}

export const getCategories= () => {
    return  fetcher("categories")
}

export const getProducts= (id) => {
   return fetcher("products?catid=" + id)
}

export const getProductById = (id) => {
    return fetcher("products/" + id)
 }

export const getProductsByQuery = query => {
    return fetcher('products?q=' + query)  // fulltext search with fake API json-server version V0.17 "?q=="
}
