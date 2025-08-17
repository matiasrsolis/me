import React, { useState } from "react";
import "./css/Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="navbar">
    <div className="logo"><img src="https://matiasrsolis.github.io/portfolio/img/logo_ms_diseno-grafico.png"></img></div>

    <ul id="nav-links" className={`nav-links ${isOpen ? "active" : ""}`}>
      <li><a href="#header">Inicio</a></li>
      <li><a href="#about">Sobre mí</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
    <div className="menu-toggle" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
  );
}

export default Nav;