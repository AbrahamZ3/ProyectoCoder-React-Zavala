import './App.css';
import { NavBar } from './Componets/NavBar/NavBar';
import ItemListConteiner from './Componets/ItemListConteiner/ItemListConteiner';
import { Nosotros } from './Componets/Nosotros.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailConteiner from './Componets/ItemDetailConteiner/ItemDetailConteiner';


function App() {
  return (

    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListConteiner />} />
        <Route path='/category/:categoryId' element={<ItemListConteiner />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/detail/:id' element={<ItemDetailConteiner />} />
      </Routes>

    </BrowserRouter>



  );
}

export default App;

// // npm star para iniciar el navegador (ctlr+K+C para comentar)
