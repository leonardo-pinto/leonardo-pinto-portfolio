import React from 'react';
import projectsData from '../../projectsData';
import {
  ProjectsCardsContainer,
  ProjectCard,
  ButtonsContainer,
  ProjectLink,
  ButtonLogo,
  ProjectImage,
  ProjectCardInfo,
  Title,
  Description,
} from './StyledComponents';
import github from '../../images/github.png';

function ProjectsCards() {
  return (
    <ProjectsCardsContainer column>
      { projectsData.map(({ title, description, image }) => (
        <ProjectCard key={title}>
          <ProjectCardInfo column>
            <Title>{ title }</Title>
            <Description>{ description }</Description>
            <ButtonsContainer>
              <ProjectLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/leonardo-pinto"
              >
                <ButtonLogo src={github} alt="github logo" />
                Code
              </ProjectLink>
              <ProjectLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/leonardo-pinto"
              >
                View Site
              </ProjectLink>
            </ButtonsContainer>
          </ProjectCardInfo>
          <ProjectImage src={image} alt={title} />
        </ProjectCard>
      ))}
    </ProjectsCardsContainer>
  );
}

export default ProjectsCards;
