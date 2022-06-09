import {createContext, useState} from "react";
const CartContext=createContext();

const CartProvider=({children})=>{
    const [cartListItems, setcartListItems]=useState([])
    const addProductToCart=(product)=>{
        console.log("se agrego el producto:", product)
        setcartListItems([product])
    }
    const data={
        cartListItems,
        addProductToCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}
export {CartContext}
export default CartProvider