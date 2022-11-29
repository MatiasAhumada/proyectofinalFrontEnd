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
          <li><a href={'/error404'}><ion-icon name="logo-whatsapp"></ion-icon></a></li>
        </ul>
        <ul className="menu">
          <li><a href={'/'}>Inicio</a></li>
          <li><a href={'/nosotros'}>Nosotros</a></li>
          <li><a href={"/menu"}>Menu</a></li>
        </ul>
        <p>&copy; Todos los derechos reservados</p>
      
      </footer>
    );
  };
  
  export default Foot;
  
