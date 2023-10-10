import React from 'react';
import { SectionContainer, Title, Subtitle } from './StyledComponents';

function Home() {
  return (
    <SectionContainer id="home" column>
      <Title>Hello, I&apos;m Leonardo Pinto</Title>
      <Subtitle>Welcome to my portfolio!</Subtitle>
      <Subtitle>
        I&apos;m a passionate Software Engineer who believes that technology
        can positively impact the world
      </Subtitle>
    </SectionContainer>
  );
}

export default Home;
