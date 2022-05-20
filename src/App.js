import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar'; 
import CardList  from './components/CardList/CardList';
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar></NavBar>
      </header> 
      <main>
      <CardList title="Productos más vendidos"></CardList>
      </main>
    </div>
  );
}

export default App;
