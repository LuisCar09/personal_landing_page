import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projects = [
    {
      title: "Futurabiolab",
      description: "FuturaBioLab is a collaborative project focused on innovation with biomaterials and its impact on the open-source community.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://dl.dropboxusercontent.com/scl/fi/qgyxhm3sj1onuj5y05js3/futura.png?rlkey=g49h21mincgqnhuzi5vbbgy3e&st=payrhic3",
      github: "https://github.com/luiscar09/futurabiolab",
      demo: "https://futurabiolab2.netlify.app/"
    },
    {
      title: "Web Store",
      description: "FuturaWebStore is an e-commerce platform built with Node.js for frontend rendering and MongoDB as the backend database.",
      technologies: ["Node.js", "MongoDB", "Express"],
      image: "https://dl.dropboxusercontent.com/scl/fi/aijdug4kxlyuznrsgmowv/backproject.png?rlkey=0d3wx1ixu4l1mbz69r17zo0mz&st=gvaddfx8",
      github: "https://github.com/luiscar09/webstore",
      demo: "https://backend-project-break-c2xv.onrender.com/"
    },
    {
      title: "Burger Shop",
      description: "BurgerShop is a commerce platform built with React, consuming its own API developed with Node.js.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://dl.dropboxusercontent.com/scl/fi/q3ob0i5dvoybxtofziv60/burgershop.png?rlkey=89n20g5k46oui5xrpyj0b73tt&st=grar7qov&dl=0",
      github: "https://github.com/luiscar09/burgershop",
      demo: "https://burgershopstore.netlify.app/"
    },
    {
      title: "Catch The Insect",
      description: "Catch The Insect is a game built with JavaScript, CSS, and HTML5.",
      technologies: ["JavaScript", "HTML5", "CSS"],
      image: "https://dl.dropboxusercontent.com/scl/fi/95s5t1k66w72j42u9kzqo/insectos.png?rlkey=anhne0vt47hl99dvdaqiy1z9h&st=guoqm5ev",
      github: "https://github.com/luiscar09/Catch-The-Insect",
      demo: "https://luiscar09.github.io/Catch-The-Insect/"
    },
    {
      title: "Movie App",
      description: "Movie App is a web application built with JavaScript, CSS, and HTML5, consuming an API to render movies.",
      technologies: ["JavaScript", "HTML5", "CSS"],
      image: "https://dl.dropboxusercontent.com/scl/fi/30dxj906djl9oln8pdb38/movieapp.png?rlkey=pwk38ppu5aqsoohyisu2j6lxg&st=hm5lfck4",
      github: "https://github.com/luiscar09/movie-app",
      demo: "https://luiscar09.github.io/movie-app/"
    },
    {
      title: "Drink Water",
      description: "Drink Water is a game developed with JavaScript, CSS, and HTML5 to practice programming logic.",
      technologies: ["JavaScript", "HTML5", "CSS"],
      image: "https://dl.dropboxusercontent.com/scl/fi/5ou2gtz3wfpxvzwanka6g/drink.png?rlkey=5yummcm7dl3yt39hm9hmt50eu&st=1aj1ps4m",
      github: "https://github.com/luiscar09/Drink-Water",
      demo: "https://luiscar09.github.io/Drink-Water/"
    }
  ];

  return (
    <main className="projects">
      <div className="section-container">
        <h1 className="title">Here are some projects I made recently.</h1>
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <article 
              key={index} 
              ref={el => projectRefs.current[index] = el}
              className={`portfolio-item-container ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="portfolio-item">
                <div className="portfolio-item--img-container">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="portfolio-item--description">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects; 