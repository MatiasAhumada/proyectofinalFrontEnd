import { Card, Container } from "react-bootstrap";
import CardPedido from "./pedido/CardPedido";

const Pedidos = () => {
    return (
        <Container className="my-5">
            <h1>Pedidos realizados</h1>
            <hr />
            <Card>
                <CardPedido></CardPedido>
            </Card>
        </Container>
    );
};

export default Pedidos;