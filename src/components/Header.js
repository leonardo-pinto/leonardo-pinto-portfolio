import React from 'react';
import StyledHeader from './HeaderStyle';

function Header() {
  return (
    <StyledHeader>
      <p>
        Leonardo Pinto
      </p>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
