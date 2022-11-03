import React from "react";
import logo_byn from "../imgs/logo_byn.png";
import hola2 from "../imgs/4735423.png";
import hola3 from "../imgs/1782765.png";
import tel from "../imgs/tel.png";
import "../../src/styles.css";

const Footer = () => {
    return(
        <footer className="bg-dark">
    <div className="container py-2">
      <div className="row">
        <div className="col-12 col-md-4">
          <p className="texto3">
            <img src={logo_byn} width="100" height="110" alt="ips"/>
          </p>
        </div>
        <div className="col-12 col-md-4 py-4">
          <p className="texto">
            <img src={hola2} width="25" height="28" alt="ips"/> 
            Beiro 3300 - Villa del Parque
          </p>
          <p className="texto">
          <img src={hola3} width="25" height="28" alt="ips"/> 
          contacto@sanitarioscampana.com.ar
          </p>
        </div>
        <div className="col-12 col-md-4 py-5">
          <h3 className="texto2">
            <img src={tel} width="25" height="29" alt="ips"/> 
            4503-6015
          </h3>
        </div>
      </div>
    </div>
  </footer>
    );
}

export default Footer;