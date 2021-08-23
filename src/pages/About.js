import React from 'react';
import Header from '../components/Header';
import ParticlesBackground from '../components/ParticlesBackground';
import Footer from '../components/Footer';
import { AboutWrapper, AboutText } from './AboutStyle';
import author from '../images/leonardo.jpeg'

function About() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <AboutWrapper>
        <img src={author} alt="author" />
        <AboutText column>
          <h3>ABOUT ME</h3>
          <p>
            Hi, I'm Leonardo Pinto, currently studying full-stack web development at
            <a target="_blank" rel="noopener noreferrer" href="https://www.betrybe.com/"> Trybe. </a>
            I have a PhD degree in Pharmacology and Biotechnology from São Paulo State University and a Bachelor's degree in Medical Physics from São Paulo State University.
          </p>
          <p>
            During my academic career I became passionate about solving problems and discovering new technologies. As a scientist, I have developed critical thinking, adaptability and ability to learn indepently.
          </p>
          <p>
            At present I'm in career transition to technology and seeking for opportunities to improve my skills.
          </p>
        </AboutText>
      </AboutWrapper>
      <Footer />
    </>
  )
};

export default About;
