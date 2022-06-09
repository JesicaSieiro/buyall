
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import CardList  from './components/CardList/CardList'; */
import CardListContainer from './components/CardListContainer/CardListContainer';

import Home from './pages/Home'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Error from './pages/Error'
import Detalle from './pages/Detalle';
import CartProvider from './context/CartContext';
function App() {
  return (
    <div className="App">
      <CartProvider >
        <BrowserRouter>
          <header className="App-header"> 
            <NavBar></NavBar>
            <Routes>
              <Route path='/'element={<Home/>}></Route>
              <Route path='/products'element={<Productos/>}></Route>
              <Route path='/products/:category' element={<Productos />}/>  
              <Route path='/product/:id'element={<Detalle></Detalle>}></Route>

              <Route path='/contacto'element={<Contacto></Contacto>}></Route>
              <Route path='*'element={<Error></Error>}></Route>
            </Routes>
          </header>
        </BrowserRouter>
      </CartProvider>
      <main>
      {/* <CardListContainer title="Productos más vendidos"></CardListContainer> */}
      
      </main>
    </div>
  );
}

export default App;
