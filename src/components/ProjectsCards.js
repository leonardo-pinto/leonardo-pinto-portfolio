import React from 'react';
import projectsData from '../projectsData';
import {
  ProjectsCardsWrapper,
  ProjectCard,
  ButtonsWrapper,
  ProjectLink,
  ButtonLogo,
  ProjectImage,
  ProjectCardInfo,
} from './ProjectsCardsStyle';
import github from '../images/github.png';

function ProjectsCards() {
  return (
    <ProjectsCardsWrapper column>
      { projectsData.map(({ title, description, image }) => (
        <ProjectCard key={title}>
          <ProjectCardInfo column>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <ButtonsWrapper>
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
            </ButtonsWrapper>
          </ProjectCardInfo>
          <ProjectImage src={image} alt={title} />
        </ProjectCard>
      ))}
    </ProjectsCardsWrapper>
  );
}

export default ProjectsCards;
