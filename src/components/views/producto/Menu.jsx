import React, { useEffect, useState } from "react";
import "../../../css/inicio.css";
import "../../../css/menu.css";
import { consultarProductoApi } from "../../helpers/queris";
import CardProducto from "./CardProducto";
import { Row } from "react-bootstrap";
import Spiner from "../Spiner";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarSpiner, setMostrarSpiner] = useState(true);
  const navegar = useNavigate();
  useEffect(() => {
    
    consultarProductoApi().then((respuesta) => {
      if (respuesta) {
        try {
          setMostrarSpiner(true);
          setProductos(respuesta);
          setMostrarSpiner(false);
        } catch (error) {
          console.log(error);
        }
      } else {
        navegar("/error404");
      }
    });
  }, []);
  const mostrarComponente =
    mostrarSpiner === true ? (
      <Spiner className="mt-5 pt-5"></Spiner>
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
