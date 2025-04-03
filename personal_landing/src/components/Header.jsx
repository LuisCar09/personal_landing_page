import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Tu Nombre</div>
        <div className="nav-links">
          <a href="#about">Sobre Mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 