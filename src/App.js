
// import './App.css';
import './scss/origen.scss';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomCartContext } from './context/CustomCartContext';


function App() {

  return (

    <CustomCartContext>
      <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/itemList' element={<ItemListContainer />} />
            <Route path='/itemList/:itemID' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

          <Footer />

      </BrowserRouter>
    </CustomCartContext>
  );
}

export default App;
