import React from "react";
import ferrum from "../imgs/ferrum.png";
import delta from "../imgs/delta.png";
import LogoNegativo from "../imgs/Logo-Negativo.png";
import logo_ips from "../imgs/logo_ips.png";
import "../../src/styles.css";

const FooterMarcas = () => {
    return(
        <div className="container">
    <h5 className="py-3">Marcas con las que trabajamos</h5>
    <div className="row">
      <div className="col-12 col-md-3 py-4">
        <p className="texto3">
          <img src={ferrum} width="250" height="50" alt="ferrum"/>
        </p>
      </div>
      <div className="col-12 col-md-3 py-4">
        <p className="texto3">
          <img src={delta} width="270" height="50" alt="delta"/>
        </p>
      </div>
      <div className="col-12 col-md-3 py-4">
        <p className="texto3">
          <img src={LogoNegativo} width="190" height="80" alt="logo"/>
        </p>
      </div>
      <div className="col-12 col-md-3 py-4">
        <p className="texto3">
          <img className="centrar" src={logo_ips} width="60" height="80" alt="ips"/>
        </p>
      </div>
    </div>
  </div>
    );
}

export default FooterMarcas;