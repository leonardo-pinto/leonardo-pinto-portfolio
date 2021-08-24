import React from 'react';
import { Nav, Title } from './NavbarStyle';
import Burger from './Burger';

const Navbar = () => (
  <Nav>
    <Title className="logo">
      Leonardo Pinto
    </Title>
    <Burger />
  </Nav>
);

export default Navbar;
