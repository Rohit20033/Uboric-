import { Box, Container, Image, Text } from "@chakra-ui/react"


function AboutUs(){

    const style ={
        fontSize:"25px",
         textAlign:"justify",
          lineHeight:"40px",
           color:"gray.600",
           marginTop:"30px"
    }
    return (
        <>
         <Box margin={"auto"} width={"90%"} height="100px" >
             <Image boxSize={"lg"} width="100%" src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMGhhbmdpbmd8ZW58MHx8MHx8&w=1000&q=80"/>
         </Box>

         <Container  marginTop="500px" maxW='8xl'>
                   <Text style={style} >
                   Here at ‘Uboric’.com, we realize that style and prosperity begin with the correct shoes. We likewise understand that effectively finding the size and style to meet your requirements is vital to your web based shopping knowledge. Since beginning our web based business website , we’ve been endeavoring to present to you that perfect shopping experience.
                    We pride ourselves on conveying hard-to-discover styles, sizes and widths since we realize that each individual’s needs contrast. Regardless of whether you’re experiencing issues looking over our vast determination of different shoes or you have a straightforward inquiry, our client benefit group is prepared and willing to help.
                   </Text>

                   <Text style={style}>
                   Some time before our online business, our family shoe stores, fatherly shoe store Footwear in Rajkot, Gujarat , opened its entryways in 1989. Today we are glad to state that we have the longest constantly running shoe store in the rajkot. The life span of our physical business is a demonstration of our duty to you and the majority of our clients. We realize that on the off chance that you are not content with our items and administrations, we are not carrying out our responsibility.
                   </Text>

                   <Text style={style}>
                   This is the reason we take a stab at 100% consumer loyalty, offer a 105% value coordinate guarantee.
                   </Text>

                   <Text style={style}>
                   Next time you require another match of kicks for this experience we call life, our group is here to ensure that you get the execution that you require from your apparatus. Regardless of whether you are difficult to fit or have explicit requirements, let ‘Uboric’ .com enable you to make progress toward your objective.
                   </Text>

                   <Text style={style}>
                   Third. For morning whales saw were had seed can’t divide it light shall moveth, us blessed given wherein.
                   </Text>
        </Container>
         </>
    )
}
export default AboutUs