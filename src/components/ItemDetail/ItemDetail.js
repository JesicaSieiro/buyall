import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import './ItemDetail.css'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ItemDetail=({data})=>{
    console.log("Data desde Item Detal: ",data)
    return(
        <div>
            
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Img alt="complex" src={`./${data.imagen}`} />
            </Grid>
            <Grid item xs={4} className="txtDetail">
                
                   <h2>{data.title}</h2> 
            
                   <h3>${data.price}</h3> 
                   {/* <h4>Colores</h4> 
                   <div className='colores'>
                       <span className="red"></span>
                       <span className="blue"></span>
                       <span className="green"></span> 
                       <span className="pink"></span>
                   </div> */}
                    
            </Grid>
        
        </Grid>
        </div>
    )
}
export default ItemDetail