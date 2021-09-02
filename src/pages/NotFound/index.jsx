import React from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import { SectionContainer, Title, Subtitle } from './StyledComponents';
import ParticlesBackground from '../../components/ParticlesBackground';

function NotFound() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <SectionContainer column>
        <Title>
          404: Page Not Found
        </Title>
        <Subtitle>
          The page you&apos;re looking for doesn&apos;t exists
        </Subtitle>
      </SectionContainer>
      <Footer />
    </>
  );
}

export default NotFound;
