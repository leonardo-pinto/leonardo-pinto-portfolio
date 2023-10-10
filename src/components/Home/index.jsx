import React from 'react';
import {
  SectionContainer, Title, Subtitle, ButtonsContainer, ProjectLink,
} from './StyledComponents';
import resume from '../../assets/resume.pdf';

function Home() {
  return (
    <SectionContainer id="home" column>
      <Title>Hello, I&apos;m Leonardo Pinto</Title>
      <Subtitle>Welcome to my portfolio!</Subtitle>
      <Subtitle>
        I&apos;m a passionate Software Engineer who believes that technology
        can positively impact the world
      </Subtitle>
      <ButtonsContainer>
        <ProjectLink href="#contact">
          Contact me
        </ProjectLink>
        <ProjectLink href={resume} download="leonardo-pinto-resume.pdf" target="_blank">
          See my resume
        </ProjectLink>
      </ButtonsContainer>
    </SectionContainer>
  );
}

export default Home;
