import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '../context/ThemeContext';
import NavLink from './NavLink';
import '../styles/Navbar.css';

const Navbar = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          LuisCar
        </Link>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link}
              to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={closeMenu}
            >
              {link}
            </NavLink>
          ))}
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon className="hamburger-icon" /> : <MenuIcon className="hamburger-icon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 