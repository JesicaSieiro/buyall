import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardItem.css'
import ItemCount from '../ItemCount/ItemCount'
const CardItem=(props)=>{
 console.log("item:",props[0])
  const {title,price,imagen,stok}=props;
  
    return(
      
        <Card sx={{ maxWidth: 345 }} className="card_item">
        <CardMedia
          component="img"
          height="200"
          
          image={`./${imagen}`}
          alt="zapatilla1"
        />
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
    )
}
export default CardItem;