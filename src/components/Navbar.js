import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imgs/Logo.png";

const Navbar = () => {
    return(
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex" id="navbarTogglerDemo01">
            <p className="navbar-brand">
                <img src={Logo} width="100" height="110" alt="sanitarios campana"/>
            </p>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">INICIO</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/QuienesSomos">QUIENES SOMOS</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Productos">PRODUCTOS</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/Contacto">CONTACTO</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/CarritoCompras">CARRITO</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;