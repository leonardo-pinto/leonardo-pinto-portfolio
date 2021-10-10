/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ParticlesBackground from '../../components/ParticlesBackground';
import Navbar from '../../components/Nav';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import {
  ContactContainer,
  Title,
  LogoContainer,
  Logo,
} from './StyledComponents';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

function Contact() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <LogoContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/leonardo-pinto"
        >
          <Logo src={github} alt="Github logo" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/leonardo-antonio-pinto/"
        >
          <Logo src={linkedin} alt="LinkedIn logo" />
        </a>
      </LogoContainer>
      <ContactContainer>
        <Title>Contact</Title>
        <ContactForm />
      </ContactContainer>
      <Footer />
    </>
  );
}

export default Contact;
