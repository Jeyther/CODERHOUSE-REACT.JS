
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return <div className="App">
    <header className="App-header">

      <div>

        <NavBar />

      </div>

      <ItemListContainer tittle='PetShop' />

      <ItemDetailContainer/>

    </header>
  </div>
    ;
}

export default App;
