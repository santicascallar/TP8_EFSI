import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const ListaCards = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
      axios.get(`https://dummyjson.com/products?limit=${props.limit}`)
      .then(function (response) {
        setProductos(response.data.products);
      })
    },[props.limit])

    return (
        <div className="container">
          <h5 className="py-3">Productos destacados</h5>
            <div id="seccion1">
              <div className="row">
              <div className="col-12 col-md-4 py-4">
                {productos.map((producto) => {
                    return(
                      <Card key={producto.id} images={producto.thumbnail} title={producto.title} description={producto.description} id={producto.id}/>
                    )
                })} 
              </div>
            </div>
          </div>
        </div>
    );
}
  
export default ListaCards;