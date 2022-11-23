import { Button, Card } from "react-bootstrap";

const CardPedido = () => {
    return (
        <Card.Body>
            <Card.Title>Nombre de usuario</Card.Title>
            <Card.Text className="text-black">Pedido : (Comida)</Card.Text>
            <Card.Text className="text-black">Costo total : $ </Card.Text>
            <Button type="button">Mandar orden</Button>
        </Card.Body>
    );
};

export default CardPedido;