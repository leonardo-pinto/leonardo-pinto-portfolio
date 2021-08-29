/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ParticlesBackground from '../../components/ParticlesBackground';
import Navbar from '../../components/Nav';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import { ContactContainer, Title } from './StyledComponents';

function Contact() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <ContactContainer>
        <Title>Contact</Title>
        <ContactForm />
      </ContactContainer>
      <Footer />
    </>
  );
}

export default Contact;
