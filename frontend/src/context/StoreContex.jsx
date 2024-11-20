import React, { createContext, useState } from 'react'
import { food_list } from '../assets/assets'


export const StoreContex  =createContext(null)
 const StoreContexProvider = (props) => {
const [cartItems,setCartItems]=useState({});


/* const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
} */

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updated = {
                ...prev,
                [itemId]: (prev[itemId] || 0) + 1,
            };
            console.log("Updated Cart:", updated);
            return updated;
        });
    };
     

/* const removeFromcart=(itemId)=>{
    setCartItems=((prev)=>({...prev,[itemId]:prev[itemId]-1}))
} */

    const removeFromcart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
    
            // If the item's count becomes 0, remove it from the cart
            if (updatedCart[itemId] <= 1) {
                delete updatedCart[itemId];
            } else {
                updatedCart[itemId] -= 1;
            }
    
            return updatedCart;
        });
    };


    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){ let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo.price*cartItems[item];
            }
         }
         return totalAmount;
       }

 const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromcart,
        getTotalCartAmount
 }
 return(
    <StoreContex.Provider value={contextValue}>
        {
            props.children
        }
    </StoreContex.Provider>
 )
}

export default StoreContexProvider ;
