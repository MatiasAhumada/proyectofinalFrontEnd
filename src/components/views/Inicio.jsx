import React, { useEffect, useState } from 'react';
import "../../css/inicio.css";
import Portada from "../home/Portada"
import Info from "../home/Info"
import Drinks from "../home/Drinks"
import FastFood from '../home/FastFood';
import ProductosMenu from './producto/ProductosMenu';



const Inicio = () => {
    const [producto, setProducto] = useState([]);
  
    return (
      
        <section>
            <Portada></Portada>
            <Info></Info>
            <Drinks></Drinks>
            <FastFood></FastFood>

          {producto.map((objeto, id) =>(<ProductosMenu
           key={id}
           nombreProducto={objeto.nombreProducto}
           precio={objeto.precio}
           imagen={objeto.imagen}
           categoria={objeto.categoria}
           descripcion={objeto.descripcion}
           id={objeto.id}
          ></ProductosMenu>))}
        </section>
        
    );
};

export default Inicio;