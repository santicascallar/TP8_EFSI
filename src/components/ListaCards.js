import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
//import { getProductos } from "../services/sanitarioService";

const ListaCards = () => {
    const [productos, setProductos] = useState([])

    useEffect(() =>{
      
      const obtenerProductos = async () => {
        const url = 'https://dummyjson.com/products';
        const result = await axios.get(url);
        setProductos(result.data.products);
      }

      obtenerProductos()

    },[]);

    return (
        <div className="container">
          <h5 className="py-3">Productos destacados</h5>
            <div id="seccion1">
              <div className="row">
              <div className="col-12 col-md-4 py-4">
                {productos.map((producto) => {
                  if(producto.id < 10) {
                    return(
                      <Card key={producto.id} images={producto.thumbnail} title={producto.title} description={producto.description} id={producto.id}/>
                    )
                  }
                  else{return (null)}
                  /*return i < 10 ?(
                    <Card key={i} images={producto.thumbnail} title={producto.title} description={producto.description}/>
                  ): null*/
                  
                })} 
              </div>

              <div className="col-12 col-md-4 py-4">
              {productos.map((producto) => {
                  if(producto.id > 10 && producto.id < 20){
                    return(
                      <Card key={producto.id} images={producto.thumbnail} title={producto.title} description={producto.description} id={producto.id}/>
                    )
                  }
                  else{return (null)}
                })} 
              </div>

              <div className="col-12 col-md-4 py-4">
              {productos.map((producto) => {
                  if(producto.id > 20) {
                    return(
                      <Card key={producto.id} images={producto.thumbnail} title={producto.title} description={producto.description} id={producto.id}/>
                    )
                  }
                  else{return (null)}
                })} 
              </div>
            </div>
          </div>
        </div>
    );
}
  
export default ListaCards;