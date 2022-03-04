
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomCartContext } from './context/CustomCartContext';


function App() {

  return (

    <CustomCartContext>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">

            <NavBar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/itemList' element={<ItemListContainer tittle='PetShop' />} />
              <Route path='/itemList/:itemID' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>

          </header>
        </div>
      </BrowserRouter>
    </CustomCartContext>
  );
}

export default App;
