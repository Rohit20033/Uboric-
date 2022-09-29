import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AddCart = createContext()

function AddCartProvider({children}){
    const [cartItem,setCartItem]=useState([])
    const [total,setTotal]=useState(0)
    const [totalPrice,setTotalPrice]=useState(0)
     
    useEffect(()=>{
        setTotal(cartItem.length)
    },[cartItem])
    const addToCart=(data)=>{
       setCartItem([...cartItem,data])
      
    }
    
    useEffect(()=>{
        totalPriceFun()
        
    },[cartItem])

    useEffect(()=>{
        deleteFromCart()
    },[totalPrice])
    const totalPriceFun=()=>{
       const i= cartItem.reduce((total, item) => Number(item.afterPrice) + total, 0)
       setTotalPrice(i)
    }

    const deleteFromCart=(id)=>{
        const deletedAryy = cartItem.filter((item)=> id != item.id )
        setCartItem(deletedAryy)
    }
    
    return <AddCart.Provider value={{cartItem,addToCart,total,totalPrice,deleteFromCart}}>{children}</AddCart.Provider>
}

export default AddCartProvider