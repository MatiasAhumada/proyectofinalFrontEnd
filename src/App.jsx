import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto"
import "./App.css";
import Inicio from "./components/views/Inicio";
import Nav from "./components/common/Nav";
import Foot from "./components/common/Foot";
import Login from "./components/views/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/views/Register";
import { useState } from "react";
import EditarProducto from "./components/views/producto/EditarProducto";

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioBar")) || [];
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return (
    <section>
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/detalle-producto/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
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
        </Routes>
      </BrowserRouter>
      <Foot></Foot>
    </section>
  );
}

export default App;
