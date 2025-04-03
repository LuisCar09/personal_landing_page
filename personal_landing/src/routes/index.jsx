import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Biography from '../sections/Biography';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/biography" element={<Biography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp; 