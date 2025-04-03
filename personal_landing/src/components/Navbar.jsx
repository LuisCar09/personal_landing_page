import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">LuisCar</Link>
        <div className="navbar-links">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="navbar-link"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 