import React from 'react';
import PropTypes from 'prop-types';
import Ul from './StyledComponents';

const RightNav = ({ open }) => (
  <Ul open={open}>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/contact">Contact</a></li>
  </Ul>
);

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default RightNav;
