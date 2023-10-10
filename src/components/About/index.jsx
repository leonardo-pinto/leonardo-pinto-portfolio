/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  AboutWrapper, AboutContainer, AboutText, Title,
} from './StyledComponents';
import author from '../../assets/images/leonardo.jpeg';

function About() {
  return (
    <AboutWrapper id="about">
      <Title>About</Title>
      <AboutContainer>
        <img src={author} alt="author" />
        <AboutText column>
          <p>
            Constantly improving my personal and technical skills. This is my
            life purpose. Back in 2021, my fascination about discovering new
            things and solving problems made me shift my career from
            Biotechnology to Software Engineering.
          </p>
          <p>
            The year of 2023 represents a milestone in my life. I have fulfilled one of my biggest
            dreams - live in Canada - and I have started a new challenge - a Software
            Engineering Technician course at Centennial College.
          </p>
          <p>
            My main focus these days is developing personal projects to
            consolidate my knowledge, while also learning and applying
            new technologies. When I&apos;m not at the computer, I&apos;m
            usually reading books, hanging out with my wife, or playing with dogs.
          </p>
        </AboutText>
      </AboutContainer>
    </AboutWrapper>
  );
}

export default About;
