
import {Routes,Route} from "react-router-dom"
import Private from "../Component/privatePage"
import AboutUs from "./Aboutus"
import Cart from "./cart"
import Catagories from "./Categories"
import Checkout from "./checkout"
import ContactUs from "./Contactus"
import HomePage from "./HomePage"
import PageNotFound from "./PagenotFound"
import Shopping from "./Shop"
import CreateAcc from "./Signup"
import SingleProducts from "./singleProductPage"

function AllRoutes(){

    return(
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/shop" element={
       
        <Shopping/>
        
        }
        
        />
        <Route path="/catagory" element={<Catagories/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/shop/:id" element={
         <Private>
        <SingleProducts/>
        </Private>
        }/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/signup" element={<CreateAcc/>}/>
        <Route path="*" element={<PageNotFound/>}/>
       </Routes>
    )
}
export default AllRoutes