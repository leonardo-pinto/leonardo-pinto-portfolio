/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from '../components/Header';
import ParticlesBackground from '../components/ParticlesBackground';
import ProjectsCards from '../components/ProjectsCards';
import Footer from '../components/Footer';
import { ProjectsWrapper, Title } from './ProjectsStyle';

function Projects() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <ProjectsWrapper>
        <Title>Projects</Title>
        <ProjectsCards />
      </ProjectsWrapper>
      <Footer />
    </>
  );
}

export default Projects;
