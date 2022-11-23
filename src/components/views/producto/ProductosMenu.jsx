import React from "react";
import "../../../css/inicio.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const ProductosMenu = (props) => {
  return (
    <article className="containerRight2">
      <h1 className="titulo">LOS MÁS ELEGIDOS</h1>
      <hr />
      <br />
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
            <Card.Link className="dos" href="#">
              Comprar
            </Card.Link>
            <Link className="dos" to={`detalle-producto/${props.id}`}>
              Ver más
            </Link>
          </Card.Body>
        </Card>
       
      </Container>

      <br />
      <br />
    </article>
  );
};

export default ProductosMenu;
