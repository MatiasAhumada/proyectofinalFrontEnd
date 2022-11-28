import React, { useEffect, useState } from "react";
import "../../../css/inicio.css";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { consultarProductoApi } from "../../helpers/queris";
import CardProducto from "./CardProducto";
import { Row } from "react-bootstrap";


const Menu = () => {
    

    const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarProductoApi().then((respuesta) => {
      console.log(respuesta);
      setProductos(respuesta);
    });
  }, [])


   
  
    return (
      <article className="containerRight2">
        <h1 className="titulo">Nuestro Menú</h1>
        <hr />
        <br />
        
        <Row xs={1} md={4} className="g-4">
          {
              productos.map((objeto, _id) => (
                <CardProducto 
                key={_id}
                nombreProducto={objeto.nombreProducto}
                precio={objeto.precio}
                imagen={objeto.imagen}
                categoria={objeto.categoria}
                descripcion={objeto.detalle}
                id={objeto._id}>
                  
                  </CardProducto>
              ))
          }
       </Row>
  
        <br />
        <br />
      </article>
    );
  };

export default Menu;