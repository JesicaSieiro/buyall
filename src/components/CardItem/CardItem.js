import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {CartContext} from '../../context/CartContext';
import { useContext } from 'react';
import './CardItem.css';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const CardItem=({producto,cantidad, setCantidad} )=>{
/* a */
/* 
 const{cartListItems,cantidad, setCantidad}=useContext(CartContext); */
/* 
  const {id,title,price,imagen,stok}=props; */
  console.log("id",producto.id)
    return(
      <div className="card_item">
        <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="200"
          
          image={`./${producto.imagen}`}
          alt="zapatilla"
        />
        <Button ><Link to={`/product/${producto.id}`}>Ver Detalle</Link></Button>
        <CardContent className='card_content'>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${producto.price}
          </Typography>
        </CardContent>
        <CardActions className='card_itemBuy'>
          <ItemCount actualizarCantidad={setCantidad} producto={producto} cantidad={cantidad} stok={producto.stok} ></ItemCount>
        </CardActions>
      </Card>
      </div>
    )
}
export default CardItem;