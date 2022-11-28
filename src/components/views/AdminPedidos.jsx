import { useEffect, useState } from "react";
import  Table  from "react-bootstrap/table";
import { Link } from "react-router-dom";
import { consultarPedidoApi } from "../helpers/queris";
import ItemPedido from './pedido/ItemPedido'

const AdminPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        
        consultarPedidoApi().then((respuesta) => {
          console.log(respuesta);
          setPedidos(respuesta);
        });
      }, []);
    
      return (
        <section className="container mainSection">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4">pedidos disponibles</h1>
            <Link className="btn btn-primary" to="/administrar/crear">Agregar</Link>
          </div>
          <hr />
          
          <Table responsive striped bordered hover >
            <thead>
              <tr>
                <th>Id del Pedido</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>URL de Imagen</th>
                <th>Categoria</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
             {
                pedidos.map((pedidos)=><ItemPedido key={pedidos._id} producto={pedidos} setPedidos={setPedidos}></ItemPedido>)
             }
             
            </tbody>
          </Table>
        </section>
      );
};

export default AdminPedidos;