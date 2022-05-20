import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './Navbar.css'
import CardWidget from '../CarWisget/CardWidget';
const NavBar=()=>{
    return(
        
        <AppBar position="static" className='headerNav'>
            <Toolbar >
            BuyAll
           
            <ul className='liksPaginas'>
                <li className='cadaLink'>Home</li>
                <li className='cadaLink'>Productos</li>
                <li className='cadaLink'>Contacto</li>
            </ul>
            <CardWidget></CardWidget>
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar