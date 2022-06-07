/* import { useState } from "react"; */
import Button from '@mui/material/Button';
import './ItemCount.css'
const ItemCount=({stok ,cantidad, actualizarCantidad, setShowButton  })=>{
   
    const addCount=()=>{
        
        actualizarCantidad(cantidad + 1 )
    }
    const removeCount=()=>{
       
       actualizarCantidad(cantidad - 1 )
    }
   
    return(
        <div className="buy_item" >
            <div className="count_item">
                <Button onClick={removeCount} disabled={cantidad==0}>-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount} disabled={cantidad==stok}>+</Button>
            </div>
            <Button variant="outlined" onClick={()=>setShowButton(true)} >Agregar Producto</Button>
        </div>
    )
}
export default ItemCount