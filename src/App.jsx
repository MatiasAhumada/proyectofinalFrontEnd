import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/views/DetalleProducto";
import "./App.css";
import Inicio from "./components/views/Inicio";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
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
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </section>
  );
}

export default App;
