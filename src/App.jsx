import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import "./App.css";

import Inicio from "./components/views/Inicio";
import Nav from "./components/common/Nav";
import Foot from "./components/common/Foot";
import Login from "./components/views/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/views/Register";
import { useState } from "react";
import EditarProducto from "./components/views/producto/EditarProducto";
import Admin from "./components/views/Admin";
import PedidosUsuario from "./components/views/PedidosUsuario";

import "./App.css";
import ProductosMenu from "./components/views/producto/ProductosMenu";

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioBar")) || [];
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return (
  
    <BrowserRouter>
   <section>
      <Nav usuarioLogueado={usuarioLogeado}
        setUsuarioLogueado={setUsuarioLogeado}></Nav>

        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/detalle-producto/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
          exact
          path="/administrador"
          element={<Admin></Admin>}
        />
          <Route
            exact
            path="/administrar/crear"
            element={<CrearProducto></CrearProducto>}
          ></Route>
          <Route
            exact
            path="/administrar/editar/:id"
            element={<EditarProducto></EditarProducto>}
          ></Route>
          <Route exact path="/registro" element={<Register></Register>} />
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}
          />
          <Route
            exact
            path="/detalle-producto/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/menu"
            element={<ProductosMenu></ProductosMenu>}
          ></Route>
          <Route exact path="/administrar" element={<Admin></Admin>}></Route>
          <Route
            exact
            path="/pedidos"
            element={<PedidosUsuario></PedidosUsuario>}
          ></Route>
        </Routes>
        <Foot></Foot>
        </section>
      </BrowserRouter>
      
   
  );
}

export default App;
