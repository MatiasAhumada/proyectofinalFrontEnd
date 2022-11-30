import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "../../css/navbar.css";

function NavBar({ usuarioLogueado, setUsuarioLogueado }) {
  const navegar = useNavigate();
  function logout() {
    localStorage.removeItem("usuarioBar");
    setUsuarioLogueado({});
    navegar("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container >
        
     
        <Navbar.Brand as={Link} to="/">
          STACK-ÉPICA
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>           
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/registro">Registro</NavLink>

            {usuarioLogueado.email ? (
              <>
                <Button variant="white" className="text-white" onClick={logout}>
                  Salir
                </Button>
              </>
            ) : (
              <NavLink to="/login">Iniciar Sesión</NavLink>
            )}

            {usuarioLogueado.isAdmin ? (
              <>
                <NavDropdown title="Administrador" id="nav-dropdown">
                  <NavDropdown.Item
                    eventKey="4.1"
                    as={Link}
                    to={"/administrar"}
                  >
                    Productos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey="4.2"
                    as={Link}
                    to={"/error404"}
                  >
                    Pedidos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey="4.3"
                    as={Link}
                    to={"/adminUsuarios"}
                  >
                    Usuarios
                  </NavDropdown.Item>
                </NavDropdown>
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
