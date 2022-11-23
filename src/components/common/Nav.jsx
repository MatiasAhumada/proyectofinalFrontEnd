import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/navbar.css";

function Nav() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a  href={'/'} className="nav__brand">
        STACK-EPICA
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href={'/'} className="nav__link">
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href={'/menu'} className="nav__link">
            Menú
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Nosotros
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contacto
          </a>
        </li>
        <li className="nav__item">
          <a href={'/register'} className="nav__link">
            Registrarse
          </a>
        </li>
        <li className="nav__item">
          <a href={'/login'} className="nav__link">
            Iniciar Sesión
          </a>
        </li>
        

      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;