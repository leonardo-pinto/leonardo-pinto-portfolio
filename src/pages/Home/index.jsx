import React from 'react';
import Footer from '../../components/Footer';
import { SectionContainer, Title, Subtitle } from './StyledComponents';

function Home() {
  return (
    <>
      <SectionContainer column>
        <Title>
          Hello, I&apos;m Leonardo Pinto
        </Title>
        <Subtitle>
          I&apos;m a junior full-stack web developer
        </Subtitle>
      </SectionContainer>
      <Footer />
    </>
  );
}

export default Home;
