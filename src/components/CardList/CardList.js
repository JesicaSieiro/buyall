import CardItem from '../CardItem/CardItem'
import Grid from '@mui/material/Grid';
const CardList=({productos})=>{
    return(
       
            <Grid container spacing={4}>
                {
                  productos.map(({id,title,price,imagen,stok})=>{
                        return(
                        
                           
                            <Grid item md={3} key={id}>
                                    <CardItem title={title} price={price} imagen={imagen} stok={stok}></CardItem>
                            </Grid>
                        
                        )
                    })
                }
            </Grid>
    )
   
}
export default CardList;