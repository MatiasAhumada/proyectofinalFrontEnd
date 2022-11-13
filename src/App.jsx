
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetalleProducto from './components/views/DetalleProducto';
import './App.css';
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'

function App() {
  return (
    <Container>
      <NavBar></NavBar>
   <BrowserRouter>
   <Routes>
    <Route 
     exact
     path="/detalle-producto/:id"
     element={<DetalleProducto></DetalleProducto>}
    ></Route>
   </Routes>
   </BrowserRouter>
   <Footer></Footer>
   </Container>
  );
}

export default App;
