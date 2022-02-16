
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>

          <NavBar />

        </div>

        <ItemListContainer tittle = 'Titulo Provisional'/>
        
      </header>
    </div>
  );
}

export default App;
