import { NavLink } from "react-router-dom";
import "../../css/footer.css";

const Foot = () => {
    return (
      <footer >
        <div className="fire text-center">
          <div className="fire" id="fire1"></div>
          <div className="fire" id="fire2"></div>
          <div className="fire" id="fire3"></div>
          <div className="fire" id="fire4"></div>
        </div>
        <ul className="social__icon">
          <li><a href="https://github.com/MatiasAhumada/proyectofinalFrontEnd"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href={'/error404'}><ion-icon name="logo-instagram"></ion-icon>
</a></li>
          <NavLink to='/error404'><ion-icon name="logo-whatsapp"></ion-icon></NavLink>
          
        </ul>
        <ul className="menu">
        <NavLink to="/">Inicio</NavLink>
<NavLink to="/nosotros">Nosotros</NavLink>  
<NavLink to="/menu">Menu</NavLink>
        </ul>
        <p>&copy; Todos los derechos reservados</p>
      
      </footer>
    );
  };
  
  export default Foot;
  
