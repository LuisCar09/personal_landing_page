import React, { useEffect, useRef } from 'react';
import { FaCode, FaShieldAlt, FaDatabase, FaCloud } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <FaCode />,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies and best practices.',
      techs: ['React', 'Node.js', 'Python', 'TypeScript', 'Express']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Implementing secure coding practices and ethical hacking techniques.',
      techs: ['Penetration Testing', 'Security Audits', 'Risk Analysis']
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Designing and optimizing database structures for performance and security.',
      techs: ['SQL', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Services',
      description: 'Deploying and managing applications in cloud environments.',
      techs: ['Docker', 'Firebase']
    }
  ];

  return (
    <div className="about-container">
      <div className="parallax-mountains"></div>
      <div className="content-wrapper">
        <section className="profile-section">
          <div className="profile-image">
            <img src="/assets/esta.png" alt="Luis Carlos Bravo" />
          </div>
        </section>

        <div className="intro-text">
          <h2 className="main-roles">
            <span>Full Stack Developer</span>
            <span className="role-separator">&</span>
            <span>Cybersecurity Specialist</span>
          </h2>
          <p className="bio-text">
            I'm a passionate Full Stack Web Developer with a strong focus on cybersecurity. 
            Currently pursuing my master's degree in cybersecurity, I combine my development 
            expertise with security best practices to build robust and secure applications.
          </p>
          <p className="bio-text">
            My journey in technology is driven by curiosity and a constant desire to learn. 
            When I'm not coding or studying security concepts, I'm contributing to open-source 
            projects and exploring new technologies in the ever-evolving tech landscape.
          </p>
        </div>

        <section className="skills-section" ref={skillsRef}>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                  transform: 'translateY(30px)'
                }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="tech-stack">
                  {skill.techs.map((tech, i) => (
                    <span key={i} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 