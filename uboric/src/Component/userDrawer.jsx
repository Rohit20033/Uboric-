import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Center,
    Text,
    FormControl,
    FormLabel,
    Box,
    VStack,
    InputGroup,
    InputRightElement
    
  } from '@chakra-ui/react'
  import React from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faUser,faEye } from '@fortawesome/free-solid-svg-icons'
  function DrawerFun({isOpen,setIsOpen}) {
    const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
    const btnRef = React.useRef()
   const onClose=()=>{
    setIsOpen(false)
   }
  
    return (
      <>
        {/* <Button  colorScheme='teal' onClick={onOpen}>
          Open
        </Button> */}
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
         
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton size={"lg"} />
            
            <DrawerHeader textAlign={"center"} borderBottomWidth='1px' >
              <Text fontSize={"30px"}>
              Sign In
              </Text>
              </DrawerHeader>
            
  
            <DrawerBody>
              <Box  height="auto" marginTop={"150px"}>
              
              <VStack spacing={7}>
              <Input focusBorderColor='black' variant='outline' p={7} fontSize={"23px"} size='lg' borderRadius="0" placeholder='Username'/>
              <InputGroup size='md'>
              <Input
                focusBorderColor='black'
                variant='outline'
                p={7}
                borderRadius="0"
                fontSize={"23px"}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
              />
              <InputRightElement width='4.5rem'>
                <Button paddingTop={"15px"} bg={"white"} onClick={handleClick}>
                <FontAwesomeIcon icon={faEye} />
                </Button>
              </InputRightElement>
            </InputGroup>
              </VStack>

              <Box marginTop={"20px"}  display={"flex"}>
               <Box display={"flex"} justifyContent="space-evenly"  width={"50%"}>
                <input p={7}  type={"checkbox"}/>
                <Text fontSize={"20px"}>Remember Me</Text>
               </Box>
               <Box display={"flex"}  justifyContent="flex-end" width={"50%"}>
               <Button colorScheme='black' variant='link'>
               Lost your password?
              </Button>
               </Box>
              </Box>
                <Button  colorScheme={"white"} w={"full"} borderRadius="0" p={7} bg="black" color="white" marginTop={"30px"}>
                  
                Sign In
                </Button>
             </Box>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerFun