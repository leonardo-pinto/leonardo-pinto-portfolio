/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Navbar from './components/Nav';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
