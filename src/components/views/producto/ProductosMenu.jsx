import React, { useEffect, useState } from "react";
import "../../../css/inicio.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Link, useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";



const ProductosMenu = (props) => {
  const usuario = JSON.parse(localStorage.getItem("usuarioBar")) || []
  const navegacion = useNavigate();
  const onClick = ()=>{
    if( usuario == ""){
      navegacion("/login") 
      Swal.fire("Debe estar logeado para realizar esta accion")
    }else{
      navegacion("/pedidos") 
      
    }
  }

 

  return (

     
      
      <Container>
        <Card className="dos" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={props.imagen} />
          <Card.Body>
            <Card.Title className="dos">{props.nombreProducto}</Card.Title>
            <Card.Text>
             {props.descripcion}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="dos">${props.precio}</ListGroup.Item>
            <ListGroup.Item className="dos">1 Persona</ListGroup.Item>
            <ListGroup.Item className="dos">{props.categoria}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button className="dos" onClick={onClick}>
              Comprar
            </Button>
            <Button className="dos " as={Link} to={`/detalle-producto/${props.id}`}>
              Ver más
            </Button>
          </Card.Body>
        </Card>
        </Container>

  );
};

export default ProductosMenu;
