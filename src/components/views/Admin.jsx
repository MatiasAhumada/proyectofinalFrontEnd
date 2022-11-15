import { useEffect, useState } from "react";
import { Table } from "react-bootstrap/lib/InputGroup";
import { Link } from "react-router-dom";
import { consultarApi } from "../helpers/queries";



const Admin =()=>{
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // para ejecutar la funcion que trabaja con una promesa,
        // cuando termine la promesa y venga la respuesta, mostrar la respuesta
    
        consultarApi().then((respuesta) => {
          console.log(respuesta);
          setProductos(respuesta);
        });
      }, []);
    
      return (
        <section className="container mainSection">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4">Productos disponibles</h1>
            <Link className="btn btn-primary" to="/administrar/crear">Agregar</Link>
          </div>
          <hr />
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Precio</th>
                <th>URL de Imagen</th>
                <th>Categoria</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
             {
                productos.map((productos)=><ItemProducto key={productos.id} producto={productos}></ItemProducto>)
             }
             
            </tbody>
          </Table>
        </section>
      );
    };