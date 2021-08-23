import React from 'react';
import StyledFooter from './FooterStyle';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

function Footer() {
  return (
    <StyledFooter>
      <p>Leonardo Pinto © 2021</p>
      <section>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/leonardo-pinto"
        >
          <img src={github} alt="Github logo" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/leonardo-antonio-pinto/"
        >
          <img src={linkedin} alt="LinkedIn logo" width="50px" />
        </a>
      </section>
    </StyledFooter>
  );
}

export default Footer;
