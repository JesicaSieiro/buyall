import CardItem from '../CardItem/CardItem'
import Grid from '@mui/material/Grid';
const CardList=(productos)=>{
 /*    const listProductos= Object.values(productos).map((item)=>{
        console.log(item)
        return(
            item.forEach(element => {
                <Grid item md={3} key={element.id}>
                    <CardItem title={element.title} price={element.price} imagen={element.imagen} stok={element.stok}></CardItem>
                 </Grid>
            })
        
        )
    }); */
    return(
       
            <Grid container spacing={4}>
                {
                    Object.values(productos).map((item)=>{
                        return(
                            /* item.forEach(element => {
                                <Grid item md={3} key={element.id}>
                                    <CardItem title={element.title} price={element.price} imagen={element.imagen} stok={element.stok}></CardItem>
                                 </Grid>
                            })
                         */
                        
                        item.map((prod)=>{
                            {console.log(prod)}
                            <Grid item md={3} key={prod.id}>
                                    <CardItem title={prod.title} price={prod.price} imagen={prod.imagen} stok={prod.stok}></CardItem>
                            </Grid>
                        })
                        )
                    })
                }
            </Grid>
    )
   
}
export default CardList;