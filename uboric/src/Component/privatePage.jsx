import { Button, useToast } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../authContext/authContextProvider"


function Private({children}){

  const {isauth}= useContext(AuthContext)
  const navigate = useNavigate()
  const toast = useToast()
   if(!isauth){
    return (
    
        <Navigate to="/"/>
    )
   }
  
   return children

   
}

export default Private