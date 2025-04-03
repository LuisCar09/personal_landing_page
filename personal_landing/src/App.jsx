import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        {/* Aquí irán los demás componentes de sección */}
      </main>
      <footer className="footer">
        <p>© 2024 Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
