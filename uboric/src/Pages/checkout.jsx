import { Box, Button, Container, Divider, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select, Text, VStack } from "@chakra-ui/react"
import { useContext } from "react"
import { AddCart } from "../authContext/cartContext"




function Checkout(){
   const {cartItem,totalPrice} =useContext(AddCart)
    return(
        <>
        <Text fontSize={"26px"} fontWeight="bold">Checkout</Text>

         <Box margin={"auto"} width={"90%"} p={0} height="auto" display={"flex"} >
            <Box width={"70%"} py={"20"} height="auto">
               <VStack
               w={"full"}
               height="auto"
               p={10}
               spacing={10}
               alignItems="flex-start"
               >
                <VStack alignItems={"flex-start"} w={"full"} spacing={"3"}>
                    <Heading>Billing details</Heading>
                </VStack>

                <Grid templateColumns='repeat(2, 1fr)' w={"90%"} gap="2">
                    <GridItem colSpan={1}  >
                    <FormControl>
                        <FormLabel>First Name**</FormLabel>
                        <Input height={"70px"} type='text' />
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={1}  >
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input height={"70px"} type='text' />
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Company name (optional)</FormLabel>
                        <Input height={"70px"} type='text' />
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Country / Region *</FormLabel>
                        <Select height={"70px"} placeholder='Select country'>
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Protugal</option>
                        <option>China</option>
                        <option>Russia</option>
                        </Select>
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Street address *</FormLabel>
                        <Input height={"70px"} type='Text' />
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Town / City *</FormLabel>
                        <Input height={"70px"} type='text' />
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>State / County *</FormLabel>
                         <Select height={"70px"} placeholder='Select country'>
                         <option>Rajasthan</option>
                         <option>J&K</option>
                         <option>Uttar Pradesh</option>
                         <option>Maharastra</option>
                         <option>Punjab</option>
                         <option>Gujrat</option>
                         <option>Goa</option>
                         <option>Chattisghar</option>
                         <option>Haryana</option>
                         <option>Himachal Pradesh</option>
                         <option>Kerala</option>
                         <option>Madhya Pradesh</option>
                         <option>Mainur</option>
                         <option>Tamil Nadu</option>
                         <option>Sikkim</option>
                         <option>Delhi</option>
                         <option>Uttrakhnad</option>
                         </Select>
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Postcode / ZIP *</FormLabel>
                        <Input height={"70px"} type='text' />
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Phone *</FormLabel>
                        <Input height={"70px"} type='number' />
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Alternate Number (optional)</FormLabel>
                        <Input type='number' height={"70px"} />
                    
                    </FormControl>
                    
                    </GridItem>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input height={"70px"} type='email' />
                    
                    </FormControl>
                    
                    </GridItem>

                    <VStack alignItems={"flex-start"} w={"full"} spacing={"3"}>
                        <Heading>Additional information</Heading>
                    </VStack>
                    <GridItem colSpan={2}  >
                    <FormControl>
                        <FormLabel>Order notes (optional)</FormLabel>
                        <Input type='text' height={"170px"} />
                    
                    </FormControl>
                    
                    </GridItem>
                    
                 </Grid>
               </VStack>
            </Box>

            <Box width={"30%"} height="auto" marginTop={"150px"}>
            <VStack alignItems={"flex-start"} w={"full"} spacing={"3"}>
                        <Heading>Your Order</Heading>
                    </VStack>
            <Box width={"100%"} height="auto" border={"1px solid grey"}>
            
                <Grid  templateColumns='repeat(2, 1fr)' w={"100%"} gap="2">
                   <GridItem colSpan={1}>
                      <Text fontSize={"21px"} as="b">
                        Product
                      </Text>
                   </GridItem>
                   <GridItem  colSpan={1}>
                       <Box borderBottomWidth={"1"}>
                       <Text fontSize={"21px"} as="b">
                       Subtotal
                      </Text>
                       </Box>
                   </GridItem>
                   
                   <GridItem  colSpan={1}  >
                     {
                        cartItem.map((item)=>(
                          
                                <Text fontSize={"18px"} color="gray.600">
                                  {item.title}
                                </Text>
                           
                        ))
                     }
                     </GridItem>

                     <GridItem colSpan={1}>
                     {
                        cartItem.map((item)=>(
                          
                                <Text fontSize={"18px"} color="gray.600">
                                  {item.afterPrice}
                                </Text>
                           
                        ))
                     }
                     </GridItem>
                     <GridItem colSpan={1}>
                      <Text fontSize={"21px"} as="b">
                       Subtotal
                      </Text>
                   </GridItem>
                   <GridItem colSpan={1}>
                      <Text fontSize={"21px"} as="b">
                       {totalPrice}
                      </Text>
                   </GridItem>
                   <GridItem colSpan={1}>
                      <Text fontSize={"21px"} as="b">
                       Total
                      </Text>
                   </GridItem>
                   <GridItem colSpan={1}>
                      <Text fontSize={"21px"} as="b">
                       {totalPrice}
                      </Text>
                   </GridItem>
                </Grid>
               
            </Box>
            <Button  margin={"auto"} colorScheme={"white"} w={"50%"} borderRadius="0" p={7} bg="black" color="white" marginTop={"30px"} >
                 Place Order
                </Button>
         </Box>
         </Box>

        
        </>
    )
}
export default Checkout

{/* <Box border={"1px solid black"} width="90%" margin={"auto"} height="90vh" marginTop={"150px"}>
             <Box height={"100%"} border={"1px solid black"} width="70%">

             </Box>

             <Box></Box>
        </Box> */}

