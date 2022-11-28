import { useEffect, useState } from "react";
import  Table  from "react-bootstrap/table";
import { Link } from "react-router-dom";
import { consultarUsuarioApi } from "../helpers/queris";
import ItemUsuario from './usuario/ItemUsuario'

const AdminUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
console.log(usuarios)
    useEffect(() => {
        
        consultarUsuarioApi().then((respuesta) => {
          console.log(respuesta);
          setUsuarios(respuesta);
        });
      }, []);
    
      return (
        <section className="container mainSection">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4">Usuarios disponibles</h1>
            <Link className="btn btn-primary" to="/administrar/crearUsuario">Agregar</Link>
          </div>
          <hr />
          
          <Table responsive striped bordered hover >
            <thead>
              <tr>
                <th>Id del Usuario</th>
                <th>Nombre</th>
                <th>Email</th>                
                <th>Funciones</th>              
              </tr>
            </thead>
            <tbody>
             {
                usuarios.map((usuarios)=><ItemUsuario key={usuarios._id} usuario={usuarios} setUsuarios={setUsuarios}></ItemUsuario>)
             }
             
            </tbody>
          </Table>
        </section>
      );
};

export default AdminUsuarios;