import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useEffect,useState } from 'react'
import Button from '@mui/material/Button';
import {Link} from  'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'
import CardWidget from '../CarWisget/CardWidget';
const NavBar=()=>{
    const categories = ["woman", "man"];
   
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        
        <AppBar position="static" className='headerNav'>
            <Toolbar >
            BuyAll
           
            <ul className='liksPaginas'>
                <li className='cadaLink'><Link to='/'>Home</Link></li>
                <li className='cadaLink'
                     id="basic-button"
                     aria-controls={open ? 'basic-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                     
                 >
                    Productos
                   
                </li>
                <Menu 
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to='/products'>All</Link>
                            </MenuItem>
                            {categories.map( (cat) => {
                                return <MenuItem onClick={handleClose}>
                                    <Link to={`/products/${cat}`}>{cat}</Link>
                                </MenuItem>
                            })}

                    </Menu>
                <li className='cadaLink'><Link to='contacto'>Contacto</Link></li>
            </ul>
            <CardWidget></CardWidget>
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar