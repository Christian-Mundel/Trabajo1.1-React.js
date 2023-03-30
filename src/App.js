import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart/Cart";
import './index.css'
import LoginScreen from './components/LoginScreen/LoginScreen';



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <div className='conFondo'>

        <Routes>
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
          <Route path='/nosotros' element={ <Nosotros /> }/>
          <Route path='/login' element={ <LoginScreen /> }/>
          <Route path='*' element={ <Navigate to={"/"}/> }/>
        </Routes>

        {}
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App; 