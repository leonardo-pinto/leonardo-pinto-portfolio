/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { ContactWrapper, Title } from './ContactStyle';

function Contact() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <ContactWrapper>
        <Title>Contact</Title>
        <ContactForm />
      </ContactWrapper>
      <Footer />
    </>
  );
}

export default Contact;
