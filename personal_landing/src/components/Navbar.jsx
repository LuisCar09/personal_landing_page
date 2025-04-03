import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Aquí implementaremos el cambio de tema
  };

  // Cerrar el menú cuando cambia la ruta
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          LuisCar
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
              className={`navbar-link ${
                location.pathname === `/${link.toLowerCase().replace(/\s+/g, '-')}` ? 'active' : ''
              }`}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <CloseIcon className="hamburger-icon" /> : <MenuIcon className="hamburger-icon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 