/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ContactForm from '../ContactForm';
import {
  ContactContainer,
  Title,
  LogoContainer,
  Logo,
} from './StyledComponents';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';

function Contact() {
  return (
    <ContactContainer column id="contact">
      <Title>Contact</Title>
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
      <ContactForm />
    </ContactContainer>
  );
}

export default Contact;
