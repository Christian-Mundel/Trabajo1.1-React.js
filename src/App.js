import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import './index.css'
import { LoginProvider } from './context/LoginContext';
import AppRouter from './routes/AppRouter';




function App() {

  return (
    <LoginProvider>   
      <CartProvider>
        <AppRouter/>

        <div className='conFondo'></div>
        </CartProvider>
    </LoginProvider>

  );
}

export default App; 