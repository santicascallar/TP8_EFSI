import React from "react";
import { useContextState } from '../contextState';
import {useNavigate} from "react-router-dom";


const CarritoCompras = () => {
  let navigate = useNavigate();
    const redirigir = (url)=>{
        navigate(url);
    }
  const { contextState, setContextState } = useContextState();
  console.log(contextState)
    return (
      contextState.carrito.map(producto => (<div className="card mx-auto" width="18rem">
      <img className="card-img-top" src={producto.images} width={500} height={250} alt="producto"/>
      <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">{producto.description}</p>
          
          <button onClick={()=>redirigir(`/${producto.id}`)} className="btn btn-primary">Detalles</button>
      </div>
</div>))
    );
}
  
export default CarritoCompras;