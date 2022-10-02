import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Box,
  Flex,
  Center,
  Square,
  VStack,
  StackDivider,
} from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AddCart } from '../authContext/cartContext'



function CartModal({isOpen,isModalOpen,data}) {
  const {total,totalPrice}= useContext(AddCart)
  const navigate = useNavigate()
  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='10%'
      backdropBlur='2px'
    />
  )

  const onClose=()=>{
     isModalOpen(false)
  }
  const handdleNavigate=()=>{
    <Navigate to="/checkout" />
  }
  const [overlay, setOverlay] = React.useState(<OverlayTwo />)
   
  return (
    <>
       {/* ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          // onOpen()
        }} */}
      
      <Modal size={"6xl"} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader><Text>Successfully added to your cart.</Text></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"flex"} justifyContent={"space-between"} borderBottomWidth="1px" paddingBottom={"20px"}  >
              <Box height={"auto"} justifyContent={"space-around"} width="60%"  display={"flex"} >
                 <Box  width={"45%"} >
                  <Image
                   boxSize='170px'
                   objectFit="fill"
                  src={data.image}/>
                 </Box>
                 <Box width={"55%"}>
                 <VStack
                      divider={<StackDivider />}
                      spacing={2}
                      align='stretch'
                      
                      >
                      <Box h='50px' >
                          <Text as={"b"} fontSize="20px">
                              {data.title}
                          </Text>
                      </Box>
                      <Box h='40px'>
                          <Text color={"gray.500"} fontSize="18px">
                          ₹{data.afterPrice}
                          </Text>
                      </Box>
                      <Box h='40px' >
                          3
                      </Box>
                  </VStack>
                 </Box>
              </Box>

              <Box width={"38%"}  borderLeftWidth="1px ">
                  <Box width={"100%"}  display={"flex"} >
                     <Box margin={"auto"} width={"90%"}>
                     <VStack
                          divider={<StackDivider borderColor='gray.200' />}
                          spacing={4}
                          align='stretch'
                          >
                          <Box h='40px'>
                              <Text fontSize={"20px"} fontWeight="500">
                                  There are {total} item in your cart
                              </Text>
                          </Box>
                          <Box display={"flex"} justifyContent="space-between" h='40px' >
                              <Text fontSize={"18px"} fontWeight="bold">Subtotal :</Text>
                              <Text>
                              ₹{totalPrice}
                              </Text>
                          </Box>
                          
                      </VStack>
                     </Box>
                  </Box>

                   <Center marginTop={"50px"}>
                   <Button 
                      onClick={()=>navigate("/cart")}
                      size='xl'
                      height='68px'
                      width='90%'
                      border='2px'
                      bg={"black"}
                      borderRadius="0"
                      color="white"
                      colorScheme={"white"}
                   >View Cart</Button>
                   </Center>

                   <Center marginTop={"10px"}>
                   <Button
                   onClick={handdleNavigate}
                    size='xl'
                    height='68px'
                    width='90%'
                    border='2px'
                    bg={"white"}
                    borderRadius="0"
                    color="black"
                    colorScheme={"white"}
                   >Checkout</Button>
                   </Center>
              </Box>
            </Box>
          </ModalBody>
         
        </ModalContent>
      </Modal>
    </>
  )
}

export default CartModal