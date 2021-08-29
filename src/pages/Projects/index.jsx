/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Navbar from '../../components/Nav';
import ParticlesBackground from '../../components/ParticlesBackground';
import ProjectsCards from '../../components/ProjectsCards';
import Footer from '../../components/Footer';
import { ProjectsContainer, Title } from './StyledComponents';

function Projects() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <ProjectsContainer>
        <Title>Projects</Title>
        <ProjectsCards />
      </ProjectsContainer>
      <Footer />
    </>
  );
}

export default Projects;
