import './App.css';
import { NavBar } from './Componets/NavBar/NavBar';
import { ItemListConteiner } from './Componets/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner saludo="Hola esta es mi pagina para coder react"/>
    </div>
  );
}

export default App;