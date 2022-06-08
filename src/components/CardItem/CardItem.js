import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './CardItem.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
const CardItem=(props)=>{
 console.log("item:",props[0])
  const {id,title,price,imagen,stok}=props;
  console.log("id",id)
    return(
      <div className="card_item">
        <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="200"
          
          image={`../${imagen}`}
          alt="zapatilla"
        />
        <Button ><Link to={`/product/${id}`}>Ver Detalle</Link></Button>
        <CardContent className='card_content'>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions className='card_itemBuy'>
          {/* <Button size="small">COMPRAR</Button> */}
          <ItemCount  stok={stok}></ItemCount>
          
        </CardActions>
      </Card>
      </div>
    )
}
export default CardItem;