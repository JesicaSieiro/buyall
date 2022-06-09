import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import { useEffect,useState } from 'react'


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
const CardWidget=()=>{
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
                <Grid item xs={8}>
                    <Img alt="Zapatilla" src="../../zapatilla2.jpg" />
                </Grid>
                <Grid item xs={4} className="txtDetail">
                
                   <h2>Zapatillas runner</h2> 
            
                   <h3>$6000</h3> 
                </Grid>    
                           
                Productos

            </Menu>
        </div>
    )
}
export default CardWidget;
