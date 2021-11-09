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
  TagsContainer,
  Tags,
} from './StyledComponents';
import github from '../../images/github.png';

function ProjectsCards() {
  return (
    <ProjectsCardsContainer column>
      { projectsData.map(({
        title, description, image, code, app, tags,
      }) => (
        <ProjectCard key={title}>
          <ProjectCardInfo column>
            <Title>{ title }</Title>
            <Description>{ description }</Description>
            <TagsContainer>
              {
                tags.map((tag) => <Tags key={tag}>{tag}</Tags>)
              }
            </TagsContainer>
            <ButtonsContainer>
              <ProjectLink
                target="_blank"
                rel="noopener noreferrer"
                href={code}
              >
                <ButtonLogo src={github} alt="github logo" />
                Code
              </ProjectLink>
              { app
                && (
                <ProjectLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={app}
                >
                  View Site
                </ProjectLink>
                )}
            </ButtonsContainer>
          </ProjectCardInfo>
          <ProjectImage src={image} alt={title} />
        </ProjectCard>
      ))}
    </ProjectsCardsContainer>
  );
}

export default ProjectsCards;
