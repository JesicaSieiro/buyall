import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from  'react-router-dom';
import './Navbar.css'
import CardWidget from '../CarWisget/CardWidget';
const NavBar=()=>{
    return(
        
        <AppBar position="static" className='headerNav'>
            <Toolbar >
            BuyAll
           
            <ul className='liksPaginas'>
                <li className='cadaLink'><Link to='/'>Home</Link></li>
                <li className='cadaLink'><Link to='productos'>Productos</Link></li>
                <li className='cadaLink'><Link to='contacto'>Contacto</Link></li>
            </ul>
            <CardWidget></CardWidget>
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar