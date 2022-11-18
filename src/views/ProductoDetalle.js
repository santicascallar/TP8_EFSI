import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ActionTypes, useContextState } from '../contextState';

const ProductoDetalle = () => {
    const { productoId } = useParams();
    const [producto, setProducto] = useState([]);

    const { contextState, setContextState } = useContextState();

    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${productoId}`)
      .then(function (response) {
        setProducto(response.data);
      })
    },[productoId])

    const productoAsignado = contextState.carrito.find(product => product.id === producto.id)

    const agregarCarrito = () => {
      if(productoAsignado){
        alert("Este producto ya esta en el carrito")
      }
      else{
        setContextState({
          type: ActionTypes.AgregarCarrito,
          value: producto,
        })
      }
    }

    const eliminarCarrito = () => {
      setContextState({
        type: ActionTypes.EliminarCarrito,
        value: producto,
      })
      alert("Se ha eliminado el producto del carrito")
    }

    return (
      <div>
        <div className="container py-4">
            <h1> Titulo: {producto.title}</h1>
            <h2> Descripción: {producto.description}</h2>
            <img className="card-img-top" src={producto.thumbnail} width={500} height={600} alt="producto"/>
        <div className="py-4">
            <h3>Marca: {producto.brand}</h3>
            <h3>Categoria: {producto.category}</h3>
            <h3>Rating: {producto.rating}</h3>
            <h3>Precio: {producto.price}</h3>
            <h3>Stock Disponible: {producto.stock}</h3>
            
            <button type="button" className="btn btn-success" onClick={agregarCarrito}>Agregar</button>
            <button type="button" className="btn btn-danger" onClick={eliminarCarrito}>Eliminar </button>
            
        </div>
        </div>
      </div>
    );
}
  
export default ProductoDetalle;