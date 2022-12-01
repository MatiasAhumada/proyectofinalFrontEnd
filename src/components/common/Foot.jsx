import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../../css/footer.css";

const Foot = () => {
  return (
    <footer>
      <div className="fire text-center">
        <div className="fire" id="fire1"></div>
        <div className="fire" id="fire2"></div>
        <div className="fire" id="fire3"></div>
        <div className="fire" id="fire4"></div>
      </div>
      <ul className="social__icon">
        <Button href="https://github.com/MatiasAhumada/proyectofinalFrontEnd">
          <ion-icon name="logo-github"></ion-icon>
        </Button>
        <Link to="/error404">
          <ion-icon name="logo-instagram"></ion-icon>
        </Link>

        <Link to="/error404">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </Link>
      </ul>
      <ul className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/menu">Menu</Link>
      </ul>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
  );
};

export default Foot;
