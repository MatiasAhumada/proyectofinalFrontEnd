import React from "react";
import { Card } from "react-bootstrap"
import { Link } from "react-bootstrap/lib/Navbar";

const cardProducto = ({producto}) =>{
    const {id, nombreProducto, precio, imagen} = {...producto}
    return(
        <Card className="my-4">
            <Card.Img variant='top'
            src={imagen}
            className='img-fluid'>
            </Card.Img>
            <Card.Body>
                <Card.Title>{nombreProducto}</Card.Title>
                <Card.Text>Precio: ${precio}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link className="btn btn-danger me-2" to={`/detalle-producto${id}`}>Ver mas</Link>
            </Card.Footer>
        </Card>
    );
};

export default cardProducto







