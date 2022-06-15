/* import { useState } from "react"; */
import Button from '@mui/material/Button';
import './ItemCount.css'
import { useState , useContext } from 'react';
import {CartContext} from '../../context/CartContext'
import Productos from '../../pages/Productos';
const ItemCount=({stok ,cantidad, actualizarCantidad, setShowButton ,producto })=>{
   
    const addCount=()=>{
        
        actualizarCantidad(cantidad + 1 )
    }
    const removeCount=()=>{
       
       actualizarCantidad(cantidad - 1 )
    }
    const{addProductToCart}=useContext(CartContext)
   
   const productoNuevo={...producto,cantidad}
    return(
        <div className="buy_item" >
            <div className="count_item">
                <Button onClick={removeCount} disabled={cantidad==0} className="simbolosCount">-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount} disabled={cantidad==stok} className="simbolosCount">+</Button>
            </div>
            <Button variant="outlined" onClick={()=>{setShowButton(true);addProductToCart(productoNuevo)}}   className="btnAgregar">Agregar Producto</Button>
        </div>
    )
}
export default ItemCount