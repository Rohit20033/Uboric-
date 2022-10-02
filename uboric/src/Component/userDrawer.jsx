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
  InputRightElement,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon
  
} from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../authContext/authContextProvider'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const initData={
user_name:"",
user_email:"",
user_password:""
}
function DrawerFun({isOpen,setIsOpen}) {
  const [show, setShow] = React.useState(false)
  const [formState,setFormState]=useState(initData)
   const {isauth,login,logout}= useContext(AuthContext)
  const [signinData,setSigninData]=useState([])
  const [visible,isVisible]=useState(false)
  const navigate = useNavigate()
  
const handleClick = () => setShow(!show)
  const btnRef = React.useRef()

 const onClose=()=>{
  setIsOpen(false)
 }

 const handleOnChange=(e)=>{
   const {name,type,value}=e.target
    setFormState({...formState,[name]:value})
 }
  useEffect(()=>{
    axios.get(`https://nordstromrohit.herokuapp.com/email`).then((res)=>
      setSigninData(res.data)

    )
  })
  console.log(signinData)
  const handleSignin=()=>{
     
    
    
    for(let i=0;i<signinData.length;i++){
        if(signinData[i].user_email===formState.user_email&&signinData[i].user_password===formState.user_password){
          
           login()
           
           setFormState(initData)
           isVisible(false)
            break;
           
        }
        else{
           isVisible(true)
          break
        }
    }
  }
  const style={
    borderRadius:"0",
    backgroundColor:"black",
    color:"white",
    width:"90%"
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
           {
            isauth ?  <Text fontSize={"30px"}>
              Welcome {formState.user_name} !
            </Text>
            :

            <Text fontSize={"30px"}>
               Signin
            </Text>
           }
            </DrawerHeader>
          

          <DrawerBody>
            {isauth? 
               
               <Box width="100%">

                 <Button 
                  style={style}
                 onClick={()=>logout()}>LogOut</Button>
               </Box>

              :
              
              
            <Box  height="auto" marginTop={"150px"}>
               {
                visible ? 
                  <Box marginTop="" >
                    <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Wrong Credentials!</AlertTitle>
                    <AlertDescription> <Link to="/signup"><Text textDecoration={"underline"}>Create An Account</Text></Link> </AlertDescription>
                    </Alert>
                  </Box>
                : null
               }
            <VStack spacing={7}>
          
            <Input 
            name='user_email'
            value={formState.user_email}
            onChange={handleOnChange}
            focusBorderColor='black' variant='outline' p={7} fontSize={"23px"} size='lg' borderRadius="0" placeholder='Username'/>
            <InputGroup size='md'>
            <Input
              name='user_password'
              value={formState.user_password}
              onChange={handleOnChange}
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
              <Box paddingTop={"15px"} bg={"white"} onClick={handleClick}>
              <FontAwesomeIcon icon={faEye} />
              </Box>
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
              <Button onClick={handleSignin}  colorScheme={"white"} w={"full"} borderRadius="0" p={7} bg="black" color="white" marginTop={"30px"}>
                
              Sign In
              </Button>

              <Button  onClick={()=>navigate("/signup")}  margin={"auto"} colorScheme={"white"} w={"50%"} borderRadius="0" p={7} bg="black" color="white" marginTop={"30px"} >
                Create an account
              </Button>
           </Box>
          
          }
            
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerFun