import React from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import { SectionContainer, Title, Subtitle } from './StyledComponents';
import ParticlesBackground from '../../components/ParticlesBackground';

function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <SectionContainer column>
        <Title>
          Hello, I&apos;m Leonardo Pinto
        </Title>
        <Subtitle>
          I&apos;m a junior front end web developer
        </Subtitle>
      </SectionContainer>
      <Footer />
    </>
  );
}

export default Home;
