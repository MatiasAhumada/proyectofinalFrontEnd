import React, { useEffect, useState } from "react";
import "../../css/inicio.css";
import Portada from "../home/Portada";
import Info from "../home/Info";
import Drinks from "../home/Drinks";
import FastFood from "../home/FastFood";
import ProductosMenu from "./producto/ProductosMenu";
import { consultarProductoApi } from "../helpers/queris";
import { Row } from "react-bootstrap";

const Inicio = () => {
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    consultarProductoApi().then((respuesta) => {
      console.log(respuesta);
      setProducto(respuesta);
    });
  }, [])
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
      
      <Row xs={1} md={4} className="g-4">
      {producto.map((objeto, _id) => (
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
      </article>
    </section>
  );
};

export default Inicio;
