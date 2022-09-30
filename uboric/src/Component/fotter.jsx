import { Box, Button, Center, Image, Input, Text } from "@chakra-ui/react"



function Footer(){

    const style ={
        height:"100%",
         
         backgroundColor:"#111111",
         
    }
    return(
       
        <Box width="100%"  
        border="1px solid black"
        height={"90vh"}
        marginTop="80px"
        bg="#111111"
        >
          <Box  width="100%"  
            
            height={"30%"}
            bg="#111111"
            paddingBottom="30px"

            borderBottomWidth={"1px solid grey"}
            >
             <Box margin="auto" display={"flex"} alignItems="center" bg="#111111" justifyContent={"center"} width={"30%"} height="50%" >
                <Text fontSize={"31px"} fontWeight="bold" color={"white"}>
                Want style Ideas and Treats?
                </Text>
             </Box>
             <Box  margin="auto" display={"flex"} alignItems="center" justifyContent={"space-around"} width={"50%"} height="50%" >
                <Input color="white" bg={"#303030"} placeholder="Enter Email" fontSize={"30px"} width={"70%"} height="100%" borderRadius={"0"}/>
                <Button color="white" bg="grey" fontSize={"21px"}  borderRadius={"0"} width="25%" height={"100%"} >
                    Subscribe
                </Button>
             </Box>
          </Box>
            

          <Box margin="auto" display={"flex"} alignItems="center" justifyContent={"center"} width={"100%"} height="70%" border="1px solid black">
              
             <Box style={style} width="35%">
                 
                 <Center marginTop={"50px"}>
                 <Image boxSize={"220px"} width="80%" src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/uboric.png"/>
                 </Center>
      
             </Box>
             <Box  style={style} width="15%">
                 <Box marginTop="100px">
                    <Text fontWeight={"bold"} color="white" fontSize={"18px"}>
                        SUPPORT
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                        About Us
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                        Contact Us
                    </Text>
                 </Box>
             </Box>
             <Box style={style} width="15%">
                 <Box marginTop="100px">
                    <Text fontWeight={"bold"} color="white" fontSize={"18px"}>
                        SHOP
                    </Text>
                 </Box>
                  
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                        My Account
                    </Text>
                 </Box>
             </Box>
             <Box  style={style} width="15%">
                <Box marginTop="100px">
                    <Text fontWeight={"bold"} color="white" fontSize={"18px"}>
                        COMPANY
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                        Shipping & Returns
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                       Privercy & Policy
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                        Term and Condition
                    </Text>
                 </Box>
             </Box>
             <Box style={style} width="15%">
                <Box marginTop="100px">
                    <Text fontWeight={"bold"} color="white" fontSize={"18px"}>
                        CONTACT
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                        Customer Care
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                        Contact Support Available
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                       Mon To Sat 10:00 Am to 6:00 Pm
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                        Email
                    </Text>
                    <Text color="grey" fontSize={"19px"}>
                    uboricllp@gmail.com
                    </Text>
                 </Box>
                
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                   Mobile
                    </Text>
                 </Box>
                 <Box marginTop="20px">
                   <Text  color="grey" fontSize={"19px"}>
                   +91 97243 82162
                    </Text>
                    <Text  color="grey" fontSize={"19px"}>
                   +91 97243 82162
                    </Text>
                 </Box>
                 
             </Box>
          </Box>
                     
        </Box>
    )
}

export default Footer