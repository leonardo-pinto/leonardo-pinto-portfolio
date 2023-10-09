/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Navbar from './components/Nav';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
