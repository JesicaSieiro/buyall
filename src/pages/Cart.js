import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import {CartContext} from "../context/CartContext"
import {Link} from  'react-router-dom';
/* import CartContext from "../context/CartContext"
import Modal from '../components/Modal/Modal'
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore'
import db from "../utils/firebaseConfig"
import { useNavigate } from "react-router-dom" */

const Cart = () => {

    const{cartListItems,cantidad, totalPrice}=useContext(CartContext);
    console.log("cart list desde Checkout", cartListItems)
    return(
        <Container className='container-general'> 
        
        <h2>Checkout: </h2>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2>Producto</h2>
                <h2>Descripcion</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cartListItems.length===0 && <p className='cartEmptyTitle'>No hay productos agregados en el carrito</p>}
            {cartListItems.map((item)=>{
                const{id,title,price,imagen}=item
                return(
                    <div className='cart-table__content' key={id} >
                        <div className='cart-table__content-img'>
                            <img src={`../${imagen}`}/>
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>{cantidad}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className='btn-delete'>
                                <Delete />
                            </button>
                        </div>
                    </div>
                )
            })}
                    
                
            <div className='cart-footer'>
                <a className='btn-custom'><Link to={`/products`}>Continuar comprando</Link></a>
                <div className='cart-checkout-details'>
                    
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$  {totalPrice}</span>
                    </div>
                    <Button className='btn-custom' >Completar Compra</Button>
                </div>
            </div>
        </div>
      
    </Container>
    )
}

export default Cart