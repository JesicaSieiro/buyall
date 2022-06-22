import CardItem from '../CardItem/CardItem'
import Grid from '@mui/material/Grid';
import {  useContext } from 'react';
import {CartContext} from '../../context/CartContext'
const CardList=({productos})=>{
    const{cartListItems, setCantidad, cantidad}=useContext(CartContext);
    
    return(
       
            <Grid container spacing={4} >
                {
                  productos.map((item)=>{
                    console.log("listaItem",item.id)
                    console.log("Item",item)
                        return(
                            <Grid item md={3} key={item.id}>
                                   {/*  <CardItem actualizarCantidad={setCantidad}   cantidad={cantidad} title={title} price={price} imagen={imagen} stok={stok} id={id}></CardItem> */}
                                   <CardItem actualizarCantidad={setCantidad} producto={item} cantidad={cantidad} stok={item.stok} ></CardItem>
                            </Grid>
                        
                        )
                    })
                }
            </Grid>
    )
   
}
export default CardList;