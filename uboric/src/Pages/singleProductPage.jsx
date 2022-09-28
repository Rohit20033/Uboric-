
import { Button, ButtonGroup } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Stack, Text } from "@chakra-ui/layout"
import axios from "axios"
import { identity } from "lodash"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faCartShopping ,faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import { background } from "@chakra-ui/styled-system"

function SingleProducts(){
    const {id} = useParams()
    const [count,setCount]=useState(1)
    const [singleP,setSingleP]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/products?id=${id}`).then((res)=>
            setSingleP(res.data)
        )
    },[])

    const style={
        borderRadius:"0",
        backgroundColor:"black",
        color:"white"
     }
     console.log(singleP)
    return(
        <>
        
         <Box  display="flex" width={"85%"} height="100vh"  margin="auto" marginTop={"50px"}>
            <Box width="50%">
               {
                singleP.map((item)=>(
                 
                    <Box margin={"auto"} width={"80%"} height="70%" >
                        <Image width={"100%"} height="100%" src={item.image}/>
                    </Box>
                    
                ))
               }
            </Box>
            <Box width="50%" >
                {
                    singleP.map((item)=>(
                        <>
                        <Box display={"flex"}>
                            <Text fontSize={"4xl"} fontWeight="600" >{item.title}</Text>
                        </Box>
                        
                         <Box lineHeight={"10"} display={"flex"} justifyContent="space-between" width={"40%"}  marginTop="50px" >
                            <Text as='del'fontWeight={"bold"} color="blackAlpha.500" fontSize={"25px"}>
                            {item.price}
                            </Text>
                            <Box as='span' fontWeight={"bold"} color='tomato' fontSize={"35px"}>
                                {item.afterPrice}
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

                        <Button style={style} bg={"black"}  p={9} >
                           Add To Cart <FontAwesomeIcon size="lg" icon={faCartShopping} />
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