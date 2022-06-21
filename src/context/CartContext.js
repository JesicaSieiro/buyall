import {createContext, useState} from "react";
const CartContext=createContext();

const CartProvider=({children})=>{
    const [cartListItems, setcartListItems]=useState([])
    const[cantidad, setCantidad]=useState(0);
    const [totalPrice, setTotalPrice]=useState(0);
    
    /* const handleSetQuantity=()=>{
        product.quantity=cantidad;
    } */
    const addProductToCart=(product)=>{
        console.log("se agrego el producto:", product)
        const isInCart=cartListItems.find(item=>item.id==product.id)
        if(!isInCart){
            setcartListItems(cartListItems=>[...cartListItems,product])
           // setcartListItems([...cartListItems,product])
           product.quantity=cantidad;
           setTotalPrice(totalPrice + product.price * product.quantity)
           console.log( totalPrice)
        }
        
    }
    const data={
        cartListItems,
        addProductToCart,
        setCantidad,cantidad, totalPrice
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}
export {CartContext}
export default CartProvider