import React, { useEffect, useState } from "react";
import "../../css/inicio.css";
import Portada from "../home/Portada";
import Info from "../home/Info";
import Drinks from "../home/Drinks";
import FastFood from "../home/FastFood";


import { consultarProductoApi } from "../helpers/queris";


const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarSpiner, setMostrarSpiner] = useState(true);
  useEffect(() => {
    consultarProductoApi().then((respuesta) => {
      try{      
        setMostrarSpiner(true);
        setProductos(respuesta);
        setMostrarSpiner(false);

      }catch(error){
        console.log(error)}
    });
  }, []);
  
  return (
    <section>
      <Portada></Portada>
      <Info></Info>
      <Drinks></Drinks>
      <FastFood></FastFood>
   
    </section>
  );
};

export default Inicio;
