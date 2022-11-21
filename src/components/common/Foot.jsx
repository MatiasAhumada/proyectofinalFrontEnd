import "../../css/footer.css";


const Footer = () => {
    return (
      <footer>
        <div className="fire">
          <div className="fire" id="fire1"></div>
          <div className="fire" id="fire2"></div>
          <div className="fire" id="fire3"></div>
          <div className="fire" id="fire4"></div>
        </div>
        <ul className="social__icon">
          <li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-instagram"></ion-icon>
</a></li>
          <li><a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
        </ul>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
        <p></p>
      </footer>
    );
  };
  
  export default Footer;
  