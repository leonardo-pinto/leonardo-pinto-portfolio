import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { ContactWrapper } from './ContactStyle';

function Contact() {

  return (
    <>
      <ParticlesBackground />
      <Header />
      <ContactWrapper>
        <h1>Contact</h1>
        <ContactForm />
      </ContactWrapper>
      <Footer />
    </>
  )
};

export default Contact;
