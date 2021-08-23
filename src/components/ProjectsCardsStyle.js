import styled from 'styled-components';

export const ProjectsCardsWrapper = styled.section`
  align-items: flex-start;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-evenly;
  width: 50%;
`;

export const ProjectCard = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-evenly;
  width: 100%;
`;

export const ProjectCardInfo = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  margin-top: 2em;
  padding: 2em;
`;

export const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const ProjectLink = styled.a`
  align-items: center;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: 1px solid #000000;
  border-radius: .2rem;
  color: #FFFFFF;
  cursor:pointer;
  display: flex;
  justify-content: center;
  height: 1.2em;
  margin-right: 0.5em;
  text-decoration: none;
  overflow: hidden;
  outline:none;
  padding: 0.5em;

  &:hover {
    background-color: black;
    opacity: 0.8;
  }
`;

export const ButtonLogo = styled.img`
  margin-right: 0.3em;
  padding: 0.2em;
  width: 15px;
`;

export const ProjectImage = styled.img`
  padding-top: 2.2em;
  width: 250px;
`;
