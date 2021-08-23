import React from 'react';
import Header from '../components/Header';
import ParticlesBackground from '../components/ParticlesBackground';
import ProjectsCards from '../components/ProjectsCards';
import Footer from '../components/Footer';
import { ProjectsWrapper } from './ProjectsStyle';
import projectsData from '../projectsData';

function Projects() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <ProjectsWrapper>
        <h1>Projects</h1>
        <ProjectsCards projects={ projectsData }/>
      </ProjectsWrapper>
      <Footer />
    </>
  )
};

export default Projects;

