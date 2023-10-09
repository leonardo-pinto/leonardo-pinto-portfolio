/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ProjectsCards from '../ProjectsCards';
import { ProjectsContainer, Title } from './StyledComponents';

function Projects() {
  return (
    <ProjectsContainer column>
      <Title>Projects</Title>
      <ProjectsCards />
    </ProjectsContainer>
  );
}

export default Projects;
