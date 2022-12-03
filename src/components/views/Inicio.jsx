import React, { useEffect, useState } from "react";
import "../../css/inicio.css";
import Portada from "../home/Portada";
import Info from "../home/Info";
import Drinks from "../home/Drinks";
import FastFood from "../home/FastFood";
import ProductosMenu from "./producto/ProductosMenu";
import Spiner from './Spiner'
import { consultarProductoApi } from "../helpers/queris";
import { Row } from "react-bootstrap";

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
  const mostrarComponente =
  mostrarSpiner === true ? (
   <Spiner className='mt-5 pt-5'></Spiner>
  ) : (
    <Row xs={1} md={4} className="g-4">
        {productos.map((objeto, _id) => (
          <ProductosMenu
            key={_id}
            nombreProducto={objeto.nombreProducto}
            precio={objeto.precio}
            imagen={objeto.imagen}
            categoria={objeto.categoria}
            descripcion={objeto.detalle}
            id={objeto._id}
          ></ProductosMenu>
        ))}
      </Row>
  );
  return (
    <section>
      <Portada></Portada>
      <Info></Info>
      <Drinks></Drinks>
      <FastFood></FastFood>
      <article className="containerRight2">
        <h1 className="titulo">LOS MÁS ELEGIDOS</h1>
        <hr />
        <br />

       {mostrarComponente}
      </article>
    </section>
  );
};

export default Inicio;
