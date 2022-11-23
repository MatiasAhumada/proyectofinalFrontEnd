import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/views/DetalleProducto";

import Inicio from "./components/views/Inicio";
import Nav from "./components/common/Nav";
import Foot from "./components/common/Foot";
import Login from "./components/views/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/views/Register";
import { useState } from "react";

import PedidosUsuario from "./components/views/PedidosUsuario";

import "./App.css";
import ProductosMenu from "./components/views/producto/ProductosMenu";


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
          <Route exact path="/pedidos" element={<PedidosUsuario></PedidosUsuario>} ></Route>
        </Routes>
        
      </BrowserRouter>
      <Foot></Foot>
    
    </section>
  );
}

export default App;
