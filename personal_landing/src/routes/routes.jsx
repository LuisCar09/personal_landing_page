import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Biography from '../sections/Biography';

const RoutesApp = () => {
  const navLinks = ['About Me', 'Projects', 'Contact', 'Biography'];

  return (
    <Router>
      <Navbar links={navLinks} />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/biography" element={<Biography />} />
        </Routes>
      </main>
    </Router>
  );
};

export default RoutesApp; 