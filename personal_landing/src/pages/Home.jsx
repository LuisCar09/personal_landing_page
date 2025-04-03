import React from 'react';
import { FaCode, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <div className="title-container">
            <h1 className="name">
              <span className="letter">L</span>
              <span className="letter">u</span>
              <span className="letter">i</span>
              <span className="letter">s</span>
              <span className="space">&nbsp;</span>
              <span className="letter">C</span>
              <span className="letter">a</span>
              <span className="letter">r</span>
              <span className="letter">l</span>
              <span className="letter">o</span>
              <span className="letter">s</span>
              <span className="space">&nbsp;</span>
              <span className="letter">B</span>
              <span className="letter">r</span>
              <span className="letter">a</span>
              <span className="letter">v</span>
              <span className="letter">o</span>
            </h1>

            <ul className="roles-list">
            <li style={{ '--i': 1 }}>
              <FaCode className="role-icon" />
              Software Developer
            </li>
            <li style={{ '--i': 2 }}>
              <FaLaptopCode className="role-icon" />
              Technology Enthusiast
            </li>
            <li style={{ '--i': 3 }}>
              <FaShieldAlt className="role-icon" />
              Cybersecurity Integration
            </li>
          </ul>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home; 