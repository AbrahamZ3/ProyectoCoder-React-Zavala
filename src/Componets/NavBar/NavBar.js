
import { CardWidget } from "./CardWidget";

export function NavBar() {
  return (
    <nav className="navbar-contenedor">
      <div className="titulo-navbar">
        <h1>Tienda de Flores</h1>
      </div>
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/nuevos-productos">Nuevos Productos</a></li>
          <li><a href="/mas-vendidos">Más Vendidos</a></li>
        </ul>

        <CardWidget />


      </div>
    </nav>
  );

};

