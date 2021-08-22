import React from 'react';
import { Switch, Route } from 'react-router';
import { Home, About, Projects, Contact } from './pages';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />
      <Route path="/contact" component={ Contact } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}

export default App;
