
import "../../css/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link}  to="/">STACK-ÉPICA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className={'nav-link'}>Inicio</NavLink>
            <NavLink to='/menu'className={'nav-link'}>Menu</NavLink>
            <NavLink to=''className={'nav-link'}>Nosotros</NavLink>
            <NavLink to=''className={'nav-link'}>Contacto</NavLink>
            <NavLink to=''className={'nav-link'}>Registro</NavLink>
            <NavLink to=''className={'nav-link'}>Iniciar Sesión</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;