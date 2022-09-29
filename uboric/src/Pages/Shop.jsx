
import { Button } from "@chakra-ui/button"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { useDisclosure } from "@chakra-ui/hooks"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/layout"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { useEffect } from "react"
import {Spinner} from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../apiReq/api"


function Shopping(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [products,setProducts]=useState({})
    const [isLoading,setisLoading]= useState(false)
    const [limit,setlimit] =useState(12)
    const [catagory,setCatagory]=useState("")
    const l = 12
    const mouseHover=(e)=>{
        
    }
    const mouseEnter=(e)=>{
       e.target.style.backgroundColor="black"
       e.target.style.color="white"
    }
    const mouseLeave=(e)=>{
        e.target.style.backgroundColor="white"
        e.target.style.color="black"
    }
    const loadderFun=()=>{
        setisLoading(true)
       setTimeout(()=>{

        setlimit(limit+l)
        setisLoading(false)
       },3000)
       
    }
    useEffect(()=>{
        getProducts({
            limit:limit,
            catagory:catagory
        }).then((res)=>{
            setProducts(res)
        })
    },[limit,catagory])

   

    const handleOnChange=(e)=>{
        setCatagory(e.target.value)
        
     }
    console.log(catagory)
    return (
        <>
        <Box  display={"flex"} width={"95%"} margin="auto" marginTop={"80px"} height="auto" >
          <Box width={"25%"} height="100%" border={"1px solid black"}>
           
           <select onChange={handleOnChange} >
            <option value="">Defalut</option>
             <option value="men">Mens</option>
             <option value="women">Womens</option>
             <option value="jewelery">Jwellery</option>
             <option value="electronics">Electronics</option>
             <option value="footwear">Footwears</option>
            </select> 
          </Box>

          <Box width={"75%"} height="100%" >
             <Box display={"flex"}  justifyContent="space-between" width={"100%"} height="auto" >
                <Box  width={"40%"} height="100%"  >
                   
                   <Box display={"flex"}>
                   <Text fontSize={"5xl"} fontWeight="bold" as='samp'>Shop</Text>
                   </Box>
                   <Box display={"flex"}>
                   <Text>BreadCrum</Text>
                   </Box>
                   
                </Box>
                <Box width={"30%"} height="100%" >
                 <Menu isOpen={isOpen}>
                    <MenuButton  
                    focusBorderColor='red'
                     variant="solid"
                    width={"80%"}
                    height="70px"
                    border={"1px solid grey"}
                     borderRadius={0}
                    
                     aria-label="Courses"
                     color={"blackAlpha.700"}
                     onMouseEnter={onOpen}
                     onMouseLeave={onClose}
                     
                    >
                       <Text fontSize={"xl"}>Default</Text> {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </MenuButton>
                    <MenuList 
                     
                     onMouseEnter={onOpen} onMouseLeave={onClose}  w={"250px"}>
                        <Container>
                        <MenuItem >Default Sorting</MenuItem>
                        <MenuItem  >Men Catagory</MenuItem>
                        <MenuItem  >Women Catagory</MenuItem>
                        <MenuItem>Sort by price: low to high</MenuItem>
                        <MenuItem>Sort by price: high to low</MenuItem>
                        </Container>
                    </MenuList>
                </Menu>
                </Box>
             </Box>


             <SimpleGrid columns={3} spacing={10} width={"100%"} height="auto%" marginTop={"50px"} >
                 {
                    products?.data?.map((item)=>(
                        <>
                        
                         <Link to={`/shop/${item.id}`}>
                         <Box  key={item.id}>
                         <Box
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            width='100%'
                            py={32}
                            bgImage={item.image}
                            bgPosition='center'
                            bgRepeat='no-repeat'
                            bgSize={"cover"}
                            onMouseEnter={mouseHover}
                           
                            
                        >
                         <Box display={"none"} colorScheme='white' bg={"black"} color="white" borderRadius={"0"} w="93%" >Quick View</Box>
                        </Box>
                         <Box marginTop={"10px"} lineHeight={"8"}  fontWeight={"600"} fontSize="18px" >
                         {item.title}
                         </Box>
                          <Box lineHeight={"10"} display={"flex"} justifyContent="space-between" width={"40%"} margin="auto" >
                            <Text as='del'fontWeight={"bold"} color="blackAlpha.500" fontSize={"17px"}>
                            ₹{item.price}
                            </Text>
                            <Box as='span' fontWeight={"bold"} color='tomato' fontSize={"20px"}>
                            ₹{item.afterPrice}
                            </Box>
                        </Box>
                         </Box>
                         </Link>
                        </>
                    ))
                    }
             </SimpleGrid>
          </Box>
        </Box>

        <Button
        marginTop={"50px"}
        p={8}
        color="black"
        bg={"white"}
        borderRadius="0"
        border="1px solid black"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={loadderFun}
        >
           {isLoading ?  <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='red.200'
            color='blue.500'
            size='xl'
            />:"Load More"}
        </Button>
        
        </>
    )
}
export default Shopping

