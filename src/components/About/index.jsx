/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AboutContainer, AboutText, Title } from './StyledComponents';
import author from '../../images/leonardo.jpeg';

function About() {
  return (
    <AboutContainer>
      <img src={author} alt="author" />
      <AboutText column>
        <Title>ABOUT ME</Title>
        <p>
          Hi, I&apos;m Leonardo Pinto, currently studying full-stack web development at
          <a target="_blank" rel="noopener noreferrer" href="https://www.betrybe.com/"> Trybe. </a>
          I have a PhD degree in Pharmacology and Biotechnology from São Paulo State University
          and a Bachelor&apos;s degree in Medical Physics from São Paulo State University.
        </p>
        <p>
          During my academic career I became passionate about solving problems
          and discovering new technologies. As a scientist, I have developed critical thinking,
          adaptability and ability to learn independently.
        </p>
        <p>
          At present I&apos;m in career transition to technology and seeking for
          opportunities to improve my skills.
        </p>
      </AboutText>
    </AboutContainer>
  );
}

export default About;
