import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

import Grid from '@mui/material/Grid';
import { useEffect,useState,useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './CardWidget.css'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
const CardWidget=()=>{
    const {cartListItems}=useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <div>
            
            <Button color="inherit" id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                    <ShoppingCartRoundedIcon />
            </Button>
            <Menu 
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cartListItems.length===0 && <p className='cartItemDetals'>No hay productos agregados en el carrito</p>}
                {
                    cartListItems.map((item)=>{
                        return(
                            <div>
                            <div key={item.id} className="cartItem">
                                <Grid item xs={8}>
                                    <Img alt="Zapatilla" src={`../${item.imagen}`} />
                                    
                                </Grid>
                                <Grid item xs={4} className="cartItemDetals">
                                <p>{item.title}</p> 
                                <p>${item.price}</p> 
                                </Grid>  
                            </div>
                           
                            </div>
                         )
                    })
                }

            </Menu>
        </div>
    )
}
export default CardWidget;
