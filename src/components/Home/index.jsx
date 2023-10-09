import React from 'react';
import { SectionContainer, Title, Subtitle } from './StyledComponents';

function Home() {
  return (
    <SectionContainer column>
      <Title>Hello, I&apos;m Leonardo Pinto</Title>
      <Subtitle>Welcome to my portfolio!</Subtitle>
      <Subtitle>
        I&apos;m a passionate software engineer who believes that technology
        can positively impact the world
      </Subtitle>
      <Subtitle>
        Here you can find information about me and my projects
      </Subtitle>
    </SectionContainer>
  );
}

export default Home;
