import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/MainLayout.css';

const MainLayout = ({ children }) => {
  const navLinks = ['About Me', 'Projects', 'Contact', 'Biography'];

  return (
    <div className="app">
      <Navbar links={navLinks} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout; 