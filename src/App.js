
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header"> 
          <NavBar></NavBar>
          <Routes>
            <Route path='/'element={<Home></Home>}></Route>
            <Route path='/productos'element={<Productos></Productos>}></Route>
            <Route path='/product/:id'element={<Detalle></Detalle>}></Route>

            <Route path='/contacto'element={<Contacto></Contacto>}></Route>
            <Route path='*'element={<Error></Error>}></Route>
          </Routes>
        </header>
      </BrowserRouter>
       
      <main>
      {/* <CardListContainer title="Productos más vendidos"></CardListContainer> */}
      
      </main>
    </div>
  );
}

export default App;
