import {createContext, useState} from "react";
const CartContext=createContext();

const CartProvider=({children})=>{
    const [cartListItems, setcartListItems]=useState([])
    const[cantidad, setCantidad]=useState(0);
    const addProductToCart=(product)=>{
        console.log("se agrego el producto:", product)
        const isInCart=cartListItems.find(item=>item.id==product.id)
        if(!isInCart){
            setcartListItems(cartListItems=>[...cartListItems,product])
           // setcartListItems([...cartListItems,product])
        }
        
    }
    const data={
        cartListItems,
        addProductToCart,
        cantidad,
        setCantidad
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}
export {CartContext}
export default CartProvider