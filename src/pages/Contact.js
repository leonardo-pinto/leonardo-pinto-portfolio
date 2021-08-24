/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import Navbar from '../components/Nav/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { ContactWrapper, Title } from './ContactStyle';

function Contact() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <ContactWrapper>
        <Title>Contact</Title>
        <ContactForm />
      </ContactWrapper>
      <Footer />
    </>
  );
}

export default Contact;
