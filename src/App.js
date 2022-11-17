import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Home from './views/Home';
import QuienesSomos from './views/QuienesSomos';
import Productos from './views/Productos';
import ProductoDetalle from './views/ProductoDetalle';
import Contacto from './views/Contacto';
import CarritoCompras from './views/CarritoCompras';
import Layout from './components/Layout';
import { ContextProvider } from '../src/contextState';

function App() {
  return (
    <div>
      <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />}/>
            <Route path="/QuienesSomos" element={<QuienesSomos />}/>
            <Route path="/Productos" element={<Productos />}/>
            <Route path="/:productoId" element={<ProductoDetalle />}/>
            <Route path="/Contacto" element={<Contacto />}/>
            <Route path="/CarritoCompras" element={<CarritoCompras />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;