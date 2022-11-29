import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/views/DetalleProducto";
import "./App.css";
import Menu from './components/views/producto/Menu'
import Inicio from "./components/views/Inicio";
import Nav from "./components/common/Nav";
import Foot from "./components/common/Foot";
import Login from "./components/views/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/views/Register";
import { useState } from "react";
import PedidosUsuario from "./components/views/PedidosUsuario";
import "./App.css";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Nosotros from "./components/views/Nosotros";
import AdminPedidos from "./components/views/AdminPedidos";
import AdminUsuarios from "./components/views/AdminUsuarios";
import Error404 from "./components/views/Error404"


function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioBar")) || [];
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return (

    <section>
      <BrowserRouter>
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
            path="/adminUsuarios"
            element={<AdminUsuarios></AdminUsuarios>}
          ></Route>
          <Route
            exact
            path="/adminPedidos"
            element={<AdminPedidos></AdminPedidos>}
          ></Route>

          <Route
            exact
            path="/nosotros"
            element={<Nosotros></Nosotros>}
          ></Route>
                   

          <Route exact path="/registro" element={<Register></Register>} />
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}
          />
          <Route
            exact
            path="/menu"
            element={<Menu></Menu>}
          ></Route>
          <Route
            exact
            path="/pedidos"
            element={<PedidosUsuario></PedidosUsuario>}
          ></Route>
          <Route path="/administrar/*" element={<RutasProtegidas><RutasAdmin></RutasAdmin></RutasProtegidas>}></Route>
          <Route
            exact
            path="/error404"
            element={<Error404></Error404>}
          ></Route>
        </Routes>

      <Foot></Foot>
      </BrowserRouter>
    </section>

  );
}

export default App;
