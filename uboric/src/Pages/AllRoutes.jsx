
import {Routes,Route} from "react-router-dom"
import AboutUs from "./Aboutus"
import Catagories from "./Categories"
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
        
       </Routes>
    )
}
export default AllRoutes