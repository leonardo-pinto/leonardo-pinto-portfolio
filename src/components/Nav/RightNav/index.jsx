import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Ul from './StyledComponents';

const RightNav = ({ open }) => {
  useEffect(() => {
    const links = document.querySelectorAll('.menu li a');

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <Ul className="menu" open={open}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </Ul>
  );
};

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default RightNav;
