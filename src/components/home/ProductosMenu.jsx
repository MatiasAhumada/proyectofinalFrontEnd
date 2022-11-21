import React from 'react';
import "../../css/inicio.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';


const ProductosMenu = () => {
    return (

        <section className='containerRight2'>
        <h1 className='titulo'>LOS MÁS ELEGIDOS</h1>
        <hr />
        <br />
        <Container>
        <Card className='dos' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="img/taco.jpg" />
      <Card.Body>
        <Card.Title className='dos'>Taco</Card.Title>
        <Card.Text>
        Tortilla de harina de trigo enrollada en forma cilíndrica rellena de diversos ingredientes y que se suele acompañar de frijoles refritos.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='dos'>$900</ListGroup.Item>
        <ListGroup.Item className='dos'>1 Persona</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className='dos' href="#">Comprar</Card.Link>
        <Card.Link className='dos' href="#">Ver más</Card.Link>
      </Card.Body>

      
    </Card>
        <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="img/burrito2.jpg" />
      <Card.Body>
        <Card.Title>Burrito</Card.Title>
        <Card.Text>
        Tortilla de harina de trigo enrollada en forma cilíndrica rellena de diversos ingredientes y que se suele acompañar de frijoles refritos.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>$1000</ListGroup.Item>
        <ListGroup.Item>1 Persona</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Comprar</Card.Link>
        <Card.Link href="#">Ver más</Card.Link>
      </Card.Body>

      
    </Card>

    <Card className='tres' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="img/nachos.jpg" />
      <Card.Body>
        <Card.Title className='tres'>Nachos</Card.Title>
        <Card.Text>
        Tortilla de harina de trigo enrollada en forma cilíndrica rellena de diversos ingredientes y que se suele acompañar de frijoles refritos.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='tres'>$1600</ListGroup.Item>
        <ListGroup.Item className='tres'>2 Personas</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className='tres' href="#">Comprar</Card.Link>
        <Card.Link className='tres' href="#">Ver más</Card.Link>
      </Card.Body>

      
    </Card>
    </Container>
    
<br />
<br />
        </section>
        
    );
};

export default ProductosMenu;