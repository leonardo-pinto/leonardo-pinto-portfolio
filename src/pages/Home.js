/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer';
import Section from './HomeStyle';
import ParticlesBackground from '../components/ParticlesBackground';

function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Section column>
        <h1>
          Hello, I&apos;m Leonardo Pinto
        </h1>
        <h3>
          I&apos;m a junior front end web developer
        </h3>
      </Section>
      <Footer />
    </>
  );
}

export default Home;
