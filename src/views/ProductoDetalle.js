import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
    const { productoId } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() =>{
      
      const obtenerProducto = async () => {

        const url = `https://dummyjson.com/products/${productoId}`;
        const result = await axios.get(url);
        setProducto(result.data);
      }

      obtenerProducto()
      
    },[productoId]);

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
        </div>
        </div>
      </div>
    );
}
  
export default ProductoDetalle;