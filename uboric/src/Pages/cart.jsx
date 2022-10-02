import { AddIcon, CloseIcon } from "@chakra-ui/icons"
import { Alert, AlertIcon, Box, Button, ButtonGroup, IconButton, Image, Stack, StackDivider, Text, VStack } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AddCart } from "../authContext/cartContext"

function Cart(){
    const {cartItem,addToCart,totalPrice,deleteFromCart}=useContext(AddCart)
    const navigate = useNavigate()
    const [count,setCount]=useState(0)
    console.log(cartItem)
    const style={
        height:'50px',
        display:"flex",
        justifyContent:"space-between" ,
        paddingLeft:"15px",
         paddingRight:"15px" 
    }
    
    return (
        <>
          <Text fontSize={"40px"} as="b">
             Cart
          </Text>

           {cartItem.length==0 ? 
             
             <Stack spacing={3} marginTop="100px">
                <Alert 
                variant='solid'
                
                alignItems='center'
                width={"90%"}
               margin="auto"
                height='80px'
                status='info'>
                    <AlertIcon />
                     <Text> Your Cart Is Currently Empty!</Text>
                </Alert>
            </Stack>
           
           :
           
           <Box  display={"flex"}  height={"auto"} width="90%" margin="auto" marginTop={"100px"}>
           <Box width={"75%"} >
               {
                  cartItem?.map((item)=>(
                      <Box borderBottomWidth={"1px"} paddingBottom="20px" width={"100%"} marginTop="50px" height="200px" display={"flex"} justifyContent="space-around" >
                  <Box width={"70%"} height="100%" display={"flex"}>
                     <Box width={"30%"} height="100%" display={"flex"} >
                      <Image src={item.image}/>
                     </Box>
                     <Box width={"70%"} height="100%" >
                        <Box display={"flex"} marginTop="20px">
                           <Text fontSize={"22px"} fontWeight="bold">
                              {item.title}
                           </Text>
                        </Box>

                        <Box display={"flex"} marginTop={"50px"}>
                          <Button>-</Button>
                          <Button>{count}</Button>
                          <Button>+</Button>
                        </Box>
                     </Box>
                  </Box>

                  <Box width={"20%"} margin="auto" >
                    <Box width={"100%"} marginTop="20px">
                      <VStack
                              
                              spacing={6}
                              align='stretch'
                              >
                              <Box h='40px' fontSize={"20px"} fontWeight="bold" >
                              ₹{item.afterPrice}
                              </Box>
                              <Box h='40px' >
                               <ButtonGroup size='sm' isAttached variant='outline'>
                                 
                                  <IconButton aria-label='Add to friends' icon={<CloseIcon />} />
                                  <Button onClick={()=>deleteFromCart(item.id)}>Remove</Button>
                               </ButtonGroup>
                              </Box>
                              
                          </VStack>
                    </Box>
                  </Box>
              </Box>
                  ))
               }
           </Box>

           <Box width={"35%"}   marginTop={"70px"}>
              <Box width={"90%"} margin="auto" bg="gray.200" paddingTop={"20px"}>
                <VStack
                    divider={<StackDivider   borderColor='grey'  />}
                    spacing={4}
                    align='stretch'
                    >
                    <Box style={style} >
                        <Text fontSize={"20px"} >
                            Subtotal
                        </Text>
                        <Text  fontSize={"20px"}>
                        ₹{totalPrice}
                        </Text>
                    </Box>

                    <Box style={style} display="flex">
                       <Text fontSize={"23px"} fontWeight="bold" >
                            Total
                        </Text>
                        <Text  fontSize={"23px"} fontWeight="bold">
                        ₹{totalPrice}
                        </Text>
                    </Box>
                    <Box h='50px' >
                        3
                    </Box>
                </VStack>
              </Box>

              <Button
                size='xl'
                height='68px'
                width='90%'
                
                bg={"black"}
                borderRadius="0"
                color="white"
                fontSize={"19px"}
                marginTop="20px"
                onClick={()=>navigate("/checkout")}
                colorScheme="white"
                
              >
               Proceed to checkout
              </Button>
           </Box>
         </Box>
           }

           <Box width={"90%"} display="flex" margin="auto" marginTop="50px">
            <Button 
              size='xl'
              height='68px'
              width='15%'
              border='2px'
              bg={"black"}
              borderRadius="0"
              color="white"
              fontSize={"19px"}
              onClick={()=>navigate("/shop")}
              colorScheme="white"
            >Return to Shop</Button>
           </Box>
        </>
    )
}

export default Cart 