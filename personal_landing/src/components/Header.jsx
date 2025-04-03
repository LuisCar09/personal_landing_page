import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';

const Header = () => {
  const links = ['Home', 'About Me', 'Projects', 'Contact'];

  return (
    <header className="header">
      <Navbar links={links} />
    </header>
  );
};

export default Header; 