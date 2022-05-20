import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardItem.css'
const CardItem=(props)=>{
  const {title,price,imagen}=props;
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
        <CardActions>
          <Button size="small">COMPRAR</Button>
          
        </CardActions>
      </Card>
    )
}
export default CardItem;