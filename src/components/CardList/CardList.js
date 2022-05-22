import CardItem from '../CardItem/CardItem';
import Grid from '@mui/material/Grid';
const CardList=(prop)=>{
    
    return(
        <div>
            <h1>{prop.title}</h1>
            <Grid container spacing={4}>
                <Grid item md={3}>
                <CardItem title='Zapatilla mujer runner' price={7500} imagen='zapatilla1.jpg' stok={7}></CardItem>
                </Grid>
                <Grid item md={3}>
                <CardItem title='Zapatilla man runner' price={6500} imagen='zapatilla2.jpg' stok={9}></CardItem>
                </Grid>
                <Grid item md={3}>
                <CardItem title='Zapatilla basquet' price={9000} imagen='zapatilla3.jpg' stok={8}></CardItem>
                </Grid>
            </Grid>
        </div>
        
    )
   
}
export default CardList;