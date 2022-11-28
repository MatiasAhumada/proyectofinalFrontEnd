import { Routes, Route } from "react-router-dom";
import Admin from "../views/Admin";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import CrearUsuario from "../views/usuario/CrearUsuario";
import EditarUsuario from "../views/usuario/EditarUsuario";


const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Admin></Admin>}
        />
        <Route
          exact
          path="/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/crearUsuario"
          element={<CrearUsuario></CrearUsuario>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/editarUsuario/:id"
          element={<EditarUsuario></EditarUsuario>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;