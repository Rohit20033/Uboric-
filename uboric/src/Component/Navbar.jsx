 import {Box, Button, ButtonGroup, Flex, Heading, Spacer,Image,Text} from "@chakra-ui/react"
import { Link } from "react-router-dom"
 import {LockIcon, SearchIcon,BeatLoader} from "@chakra-ui/icons"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import DrawerFun from "./userDrawer"
import { useState } from "react"
function Navbar(){
    const [drawer,isDrawerOpen]= useState(false)
    return(
     <>
      <Box display={"flex"} justifyContent="center" alignItems={"center"} bg={"blackAlpha.900"} height="70px">
          <Text  as='samp' color={"white"} fontSize="19px">FOR ONLINE PAYMENT EXTRA ₹5% DISCOUNT ON ORDERS ABOVE ₹500</Text>
      </Box>


      <Flex borderBottomWidth='1px'  className="Navbar"  minWidth='max-content' height={"150px"} position="-webkit-sticky" alignItems='center' gap='2'>
        <Box  display={"flex"} w="22%" >
           <Box  w="40%"   >

           </Box>
           
            <Box  w="60%">
            <Link to="/">
             <Image src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png" alt="logo"/>
             </Link>
            </Box>
          
        </Box>
        <Spacer />
         <Box   w="40%" justifyContent={"space-between"} display={"flex"}>
         <Link to="/"><Text className="box" as='b' fontSize='21px'>Home</Text></Link>
         <Link to="/aboutus"><Text className="box"  as='b' fontSize='21px'>About Us</Text></Link>
         <Link to="/shop"><Text className="box" as='b' fontSize='21px'>Shop</Text></Link>
         <Link to="/catagory"><Text className="box" as='b' fontSize='21px'>Categories</Text></Link>
         <Link to="/contactus"><Text className="box" as='b' fontSize='21px'>Contact Us</Text></Link>
         </Box>
        <Spacer />
        <ButtonGroup marginRight={"50px"} width={"15%"} gap='2' >
            <Button bg='white'><SearchIcon  w={6} h={6} /></Button>
            <Button  bg='white' onClick={()=>isDrawerOpen(true)}><FontAwesomeIcon icon={faUser} size="lg"  /></Button>
            <Button  bg='white'><FontAwesomeIcon icon={faHeart}  size="lg" /></Button>
             <Box>
              <Box position={"absolute"} >
               <Button bg='white'><FontAwesomeIcon size="lg" icon={faCartShopping} /></Button>
              </Box>
             <Box position={"relative"} style={{bottom:"5px",left:"30px"}} w="25px"  borderRadius={"40%"} border bg="tomato">
                <Text color={"white"}>
                    0
                </Text>
             </Box>
             </Box>
        </ButtonGroup>
   </Flex>
     <DrawerFun isOpen={drawer} setIsOpen={isDrawerOpen}/>


     </>
    )
}

export default Navbar