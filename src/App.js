
import './App.css';
import NavBar from './components/Navbar/Navbar'; 
/* import CardList  from './components/CardList/CardList'; */
import CardListContainer from './components/CardListContainer/CardListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar></NavBar>
      </header> 
      <main>
      <CardListContainer title="Productos más vendidos"></CardListContainer>
      </main>
    </div>
  );
}

export default App;
