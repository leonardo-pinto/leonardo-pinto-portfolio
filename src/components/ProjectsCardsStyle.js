import styled from 'styled-components';

export const ProjectsCardsWrapper = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  justify-content: space-evenly;
  margin-top: 2em;
  padding: 2em;
`;

export const ProjectCard = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  justify-content: space-evenly;
`;

export const ProjectCardInfo = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  margin-top: 2em;
  padding: 2em;
`;

export const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const ProjectLink = styled.button`
  align-items: center;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: 1px solid #000000;
  border-radius: 5%;
  cursor:pointer;
  display: flex;
  justify-content: center;
  margin-right: 0.5em;
  overflow: hidden;
  outline:none;
  padding: 0.4em;
`;

export const ButtonLogo = styled.img`
  margin-right: 0.3em;
  padding: 0.2em;
  width: 15px;
`;

export const ProjectImage = styled.img`
  width: 250px;
`;
