/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
