import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ActionTypes, useContextState } from '../contextState';


const ProductoDetalle = () => {
    const { productoId } = useParams();
    const [producto, setProducto] = useState([]);
    const [productoAgregado ,setProductoAgregado] = useState ([]);

    const { contextState, setContextState } = useContextState();

    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${productoId}`)
      .then(function (response) {
        setProducto(response.data);
      })
    },[])

    /*useEffect(() =>{
      
      const obtenerProducto = async () => {

        const url = `https://dummyjson.com/products/${productoId}`;
        const result = await axios.get(url);
        setProducto(result.data);
      }

      obtenerProducto()
      
    },[productoId]);*/

    const productoAsignado = contextState.carrito.find(item => item.id === producto.id)

    const agregarCarrito = () => {
      if(productoAsignado){
        alert("Cantidad de platos maximos alcanzado")
      }
      else{
        setContextState({
          type: ActionTypes.AgregarCarrito,
          value: producto,
        })
      }
      
      //setProductoAgregado(contextState.carrito.id)
      console.log(productoAsignado)
      console.log(productoId)
      console.log(contextState)
      //console.log(productoAgregado)
    }

    

    const eliminarCarrito = () => {
      setContextState({
        type: ActionTypes.EliminarCarrito,
        value: producto,
      })
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

            {/*agregar al carrito */}
            <button type="button" onClick={agregarCarrito} className="btn btn-primary">Agregar</button>
        </div>
        </div>
      </div>
    );
}
  
export default ProductoDetalle;