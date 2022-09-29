
import {Routes,Route} from "react-router-dom"
import AboutUs from "./Aboutus"
import Cart from "./cart"
import Catagories from "./Categories"
import Checkout from "./checkout"
import ContactUs from "./Contactus"
import HomePage from "./HomePage"
import Shopping from "./Shop"
import SingleProducts from "./singleProductPage"

function AllRoutes(){

    return(
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/shop" element={<Shopping/>}/>
        <Route path="/catagory" element={<Catagories/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/shop/:id" element={<SingleProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        
       </Routes>
    )
}
export default AllRoutes