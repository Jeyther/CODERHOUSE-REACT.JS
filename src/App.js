import './scss/origen.scss';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import Page404 from './components/Page404/Page404';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CustomCartContext } from './context/CustomCartContext';
import { CustomAlertContext } from './context/CustomAlertContext';

function App() {

  return (

    <CustomAlertContext>
      <CustomCartContext>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/itemList' element={<ItemListContainer />} />
            <Route path='/itemList/:itemID' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Page404 />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </CustomCartContext>
    </CustomAlertContext>
  );
}

export default App;
