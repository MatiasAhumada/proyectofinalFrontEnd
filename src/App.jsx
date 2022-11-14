
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetalleProducto from './components/views/DetalleProducto';
import './App.css';
import Inicio from './components/views/Inicio'
import Navegar from './components/common/Navegar'
import Pie from './components/common/Pie'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
   </Routes>
   </BrowserRouter>
<Pie></Pie>
   </Container>
 
  );
}

export default App;
