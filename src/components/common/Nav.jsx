import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../css/navbar.css";

function NavBar({usuarioLogueado, setUsuarioLogueado}) {
  const navegar = useNavigate();
  function logout (){
    localStorage.removeItem("usuarioBar")
    setUsuarioLogueado({});
    navegar("/")
  }
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">STACK-ÉPICA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/">Nosotros</Nav.Link>
            <Nav.Link href="/">Contacto</Nav.Link>
            <Nav.Link href="/registro">Registro</Nav.Link>
            
            {usuarioLogueado.email ? (
              <>  
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Button variant="white" className="text-white" onClick={logout}>Salir</Button>
              </>
            ) : (
              <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
            )}

            {usuarioLogueado.isAdmin ?(
              <>
              <Nav.Link href="/administrar">Administrador</Nav.Link>
              </>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;