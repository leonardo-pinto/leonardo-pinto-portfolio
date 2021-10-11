/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Nav';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground />
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
