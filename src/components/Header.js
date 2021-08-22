import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './HeaderStyle';

function Header() {
  return (
    <StyledHeader>
      <p>
        Leonardo Pinto
      </p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </StyledHeader>
  )
};

export default Header;
