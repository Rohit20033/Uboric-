
import axios from "axios"
export const  getProducts=(params={})=>{
    
    return axios.get(`http://localhost:3000/products?_page=1&`,{
        params: {
            
            _limit: params.limit,
            
          }
    })
}