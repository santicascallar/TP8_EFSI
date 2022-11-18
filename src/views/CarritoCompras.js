import React from "react"
import { useContextState } from '../contextState';

const CarritoCompras = () => {

  const { contextState, setContextState } = useContextState();
  
    return (
      <div className="container">
        {contextState.carrito.map(producto => (<div className="card mx-auto" width="18rem">
          <img className="card-img-top" src={producto.thumbnail} width={450} height={400} alt="producto"/>
          <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text">{producto.description}</p>
          </div>
          </div>))} 
      </div>
    );
}
  
export default CarritoCompras;