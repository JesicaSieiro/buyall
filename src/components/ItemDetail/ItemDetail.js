import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const ItemDetail=({data})=>{
    const[cantidad, setCantidad]=useState(0);
    const[showButton, setShowButton]=useState(false);
    

    const addProductToCart=()=>{
        console.log("datos del producto:",data);
        console.log("Cantidad Comprada:",cantidad);
    }

    return(
        <div>
            
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Img alt="complex" src={`../${data.imagen}`} />
            </Grid>
            <Grid item xs={4} className="txtDetail">
                
                   <h2>{data.title}</h2> 
            
                   <h3>${data.price}</h3> 
                {/* si el valor del useState es true muestra el ItemCount y si es false muestra el boton */}
                {!showButton?
                   <ItemCount actualizarCantidad={setCantidad} cantidad={cantidad} stok={data.stok} setShowButton={setShowButton}></ItemCount>
                  :
                   <Button variant="outlined" onClick={addProductToCart}><Link to='/cart'>Terminar compra</Link></Button> }
                   
            </Grid>
        
        </Grid>
        </div>
    )
}
export default ItemDetail