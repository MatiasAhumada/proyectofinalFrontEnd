import React, { useEffect, useState } from "react";
import "../../../css/inicio.css";
import { consultarProductoApi } from "../../helpers/queris";
import CardProducto from "./CardProducto";
import { Row } from "react-bootstrap";
import Spiner from '../Spiner'

const Menu = () => {
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
          <CardProducto
            key={_id}
            nombreProducto={objeto.nombreProducto}
            precio={objeto.precio}
            imagen={objeto.imagen}
            categoria={objeto.categoria}
            descripcion={objeto.detalle}
            id={objeto._id}
          ></CardProducto>
        ))}
      </Row>
  );

  return (
    <article className="containerRight2">
      <h1 className="titulo">Nuestro Menú</h1>
      <hr />
      <br />
{mostrarComponente}
      

      <br />
      <br />
    </article>
  );
};

export default Menu;
