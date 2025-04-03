import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="profile-container">
          <img 
            src="/images/profile.jpg" 
            alt="Luis Carlos Bravo" 
            className="profile-image"
          />
        </div>
        <h1>Luis Carlos Bravo</h1>
        <ul className="roles-list">
          <li>Software developer</li>
          <li>Technology enthusiast</li>
          <li>Cybersecurity Integration</li>
        </ul>
      </div>
    </section>
  );
};

export default Home; 