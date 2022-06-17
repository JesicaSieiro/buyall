import CardItem from '../CardItem/CardItem'
import Grid from '@mui/material/Grid';
import {  useContext } from 'react';
import {CartContext} from '../../context/CartContext'
const CardList=({productos})=>{
    const{cartListItems,cantidad, setCantidad}=useContext(CartContext);
    
    return(
       
            <Grid container spacing={4} >
                {
                  productos.map(({id,title,price,imagen,stok})=>{
                    console.log("listaItem",id)
                        return(
                        
                           
                            <Grid item md={3} key={id}>
                                    <CardItem actualizarCantidad={setCantidad}  cantidad={cantidad} title={title} price={price} imagen={imagen} stok={stok} id={id}></CardItem>
                            </Grid>
                        
                        )
                    })
                }
            </Grid>
    )
   
}
export default CardList;