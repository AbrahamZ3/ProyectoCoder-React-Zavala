import './App.css';
import { NavBar } from './Componets/NavBar/NavBar';
import ItemListConteiner from './Componets/ItemListConteiner/ItemListConteiner';
import { Nosotros } from './Componets/Nosotros.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailConteiner from './Componets/ItemDetailConteiner/ItemDetailConteiner';
import { CartProvider } from './context/CartContext';
import Cart from './Componets/Cart/Cart';
import Checkout from './Componets/Checkout/Checkout';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/category/:categoryId' element={<ItemListConteiner />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/detail/:id' element={<ItemDetailConteiner />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;