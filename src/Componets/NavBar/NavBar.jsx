import "./NavBar.css";
import { CardWidget } from "./CardWidget";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";


export function NavBar() {

  return (
    <>
      <header className="header">
        <Link to="/"> <h1 className="header__logo">Tienda de Flores</h1></Link>
      </header>

      <nav className="navegacion">

        <Link className="navegacion__enlace" to="/">Tienda</Link>
        <Link className="navegacion__enlace" to="/nosotros">Nosotros</Link>
        <Link className="navegacion__enlace" to="/">Categorias</Link>



        <div className="carrito">
          <CardWidget />
        </div>
      </nav>
    </>
  );
};