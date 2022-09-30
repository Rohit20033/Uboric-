
import axios from "axios"
export const  getProducts=(params={})=>{
    
    return axios.get(`https://uboric-api.herokuapp.com/products?_page=1&`,{
        params: {
            
            _limit: params.limit,
            _catagory: params.catagory
            
          }
    })
}