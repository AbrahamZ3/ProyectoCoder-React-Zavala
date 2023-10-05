import "./NavBar.css";
import { CardWidget } from "./CardWidget";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";


export function NavBar() {

  return (
    <>
      <header className="header">
        <h1 className="header__logo">Tienda de Flores</h1>
        <Link to="/"> <img src="../img/logo.png" alt="logo" /> </Link>

      </header>

      <div className="contendor-nav">

        <nav className="navegacion">

          <ul className="nav-enlaces">

            <li className="navegacion__enlace">
              <Link to="/">Tienda</Link>
            </li>
            <li className="navegacion__enlace">
              <Link to="/nosotros">Nosotros</Link>
            </li>

            <li className="navegacion__enlace categorias">

              Categorias

              <ul className="menu-categorias">
                <li> <Link className="navegacion__enlace-categoria" to="/category/Rosas">Rosas</Link> </li>
                <li> <Link className="navegacion__enlace-categoria" to="/category/Tulipanes">Tulipanes</Link> </li>
                <li> <Link className="navegacion__enlace-categoria" to="/category/Orquídeas">Orquídeas</Link> </li>
                <li> <Link className="navegacion__enlace-categoria" to="/category/Girasoles">Girasoles</Link> </li>
              </ul>
            </li>

          </ul>
          <div className="carrito">
            <CardWidget />
          </div>
        </nav>


      </div>

    </>
  );
};