import React from 'react';
import { Nav, Title } from './StyledComponents';
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
