
import { Button, ButtonGroup } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Stack, Text } from "@chakra-ui/layout"
import axios from "axios"
import { identity } from "lodash"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faCartShopping ,faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import { background } from "@chakra-ui/styled-system"
import { useContext } from "react"
import { AddCart } from "../authContext/cartContext"
import CartModal from "../Component/cartModal"
import { Spinner } from "@chakra-ui/react"

function SingleProducts(){
    const {id} = useParams()
    const {addToCart,cartItem}= useContext(AddCart)
    const [count,setCount]=useState(1)
    const [singleP,setSingleP]=useState([])
    const [modal,isModalOpen]=useState(false)
    const [state,setState]=useState(false)
    const [modalData,setModalData]=useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/products?id=${id}`).then((res)=>
            setSingleP(res.data)
        )
    },[])
   const handleAddToCart=(item)=>{
    setModalData(item)
    setState(true)
       setTimeout(()=>{
        addToCart(item)
        isModalOpen(true)
        setState(false)
        
       },3000)
   
        
   }
    const style={
        borderRadius:"0",
        backgroundColor:"black",
        color:"white"
     }
     console.log(cartItem)
    return(
        <>
        
         <Box  display="flex" width={"85%"} height="100vh"  margin="auto" marginTop={"50px"}>
            <Box width="50%">
               {
                singleP.map((item)=>(
                 
                    <Box key={item.key} margin={"auto"} width={"80%"} height="70%" >
                        <Image width={"100%"} height="100%" src={item.image}/>
                    </Box>
                    
                ))
               }
            </Box>
            <Box width="50%" >
                {
                    singleP.map((item)=>(
                        <>
                        <Box key={item.key} display={"flex"}>
                            <Text fontSize={"4xl"} fontWeight="600" >{item.title}</Text>
                        </Box>
                        
                         <Box lineHeight={"10"} display={"flex"} justifyContent="space-between" width={"40%"}  marginTop="50px" >
                            <Text as='del'fontWeight={"bold"} color="blackAlpha.500" fontSize={"25px"}>
                            ₹{item.price}
                            </Text>
                            <Box as='span' fontWeight={"bold"} color='tomato' fontSize={"35px"}>
                            ₹{item.afterPrice}
                            </Box>
                        </Box>

                         <Box display={"flex"}>
                            <Text fontSize={"18"}>
                                (In Stocks)
                            </Text>
                         </Box>

                         {/* <Box display={"flex"}>
                            <Text fontSize={"18"}>
                            Or 3 interest free payments of ₹233.00 with  
                            </Text>
                         </Box> */}

                       <Box marginTop={"50px"}>
                       <Stack  direction='row' spacing={4} align='center'>
                        <ButtonGroup borderRadius={"0"} border={"1px solid black"} color={"black"} bg="white" p={4} colorScheme='white' variant='solid'>
                            <Button onClick={()=>setCount(count-1)} colorScheme='white' disabled={count==1} color={"black"}><Text fontSize={"30px"}><FontAwesomeIcon icon={faMinus} /></Text></Button>
                            <Button colorScheme='white' color={"black"}><Text fontSize={"23px"}>{count}</Text></Button>
                            <Button onClick={()=>setCount(count+1)} colorScheme='white' color={"black"}><Text fontSize={"30px"}><FontAwesomeIcon icon={faPlus} /></Text></Button>
                        </ButtonGroup>

                        <Button onClick={()=>handleAddToCart(item)} style={style} bg={"black"}  p={9} >
                           {/* Add To Cart <FontAwesomeIcon size="lg" icon={faCartShopping} /> */}
                                {state ?  <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='red.200'
                                    color='blue.500'
                                    size='xl'
                                    />:"ADD To Cart"}

                           <CartModal isOpen={modal} isModalOpen={isModalOpen} data={modalData}/>
                        </Button>
                        <Button style={style} p={9}  colorScheme='white' >
                            Buy Now
                        </Button>
                         
                        </Stack>

                        <Box p={4} marginTop={"50px"} display={"flex"} justifyContent="space-around" border="1px solid black" width={"27%"}>
                          <Box fontWeight={"bold"} fontSize="18px">Add To Wishlist</Box>
                          <Box><FontAwesomeIcon size="lg" icon={faHeart} /></Box>
                        </Box>
                       </Box>
                     </>
                    ))
                }
            </Box>
         </Box>
         
        </>
    )
}

export default SingleProducts