/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ProjectsCards from '../../components/ProjectsCards';
import Footer from '../../components/Footer';
import { ProjectsContainer, Title } from './StyledComponents';

function Projects() {
  return (
    <>
      <ProjectsContainer column>
        <Title>Projects</Title>
        <ProjectsCards />
      </ProjectsContainer>
      <Footer />
    </>
  );
}

export default Projects;
