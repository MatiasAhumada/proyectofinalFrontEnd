
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetalleProducto from './components/views/DetalleProducto';
import './App.css';
import Inicio from './components/views/Inicio'
import Navegar from './components/common/Navegar'
import Pie from './components/common/Pie'
import Login from './components/views/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioBar")) || [];
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario)

  return (
    <Container>
<Navegar></Navegar>
   <BrowserRouter>
   <Routes>
    <Route
    exact
    path='/'
    element={<Inicio></Inicio>}></Route>
    <Route 
     exact
     path="/detalle-producto/:id"
     element={<DetalleProducto></DetalleProducto>}
    ></Route>
    <Route exact path="/login" element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>} />
   </Routes>
   </BrowserRouter>
<Pie></Pie>
   </Container>
 
  );
}

export default App;
