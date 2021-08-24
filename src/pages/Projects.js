/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Navbar from '../components/Nav/Navbar';
import ParticlesBackground from '../components/ParticlesBackground';
import ProjectsCards from '../components/ProjectsCards';
import Footer from '../components/Footer';
import { ProjectsWrapper, Title } from './ProjectsStyle';

function Projects() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <ProjectsWrapper>
        <Title>Projects</Title>
        <ProjectsCards />
      </ProjectsWrapper>
      <Footer />
    </>
  );
}

export default Projects;
