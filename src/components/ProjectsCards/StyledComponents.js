import styled from 'styled-components';

export const ProjectsCardsContainer = styled.section`
  align-items: flex-start;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-evenly;
  width: 70%;
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
`;

export const Title = styled.h3`
  color: #FFFFFF;
  font-size: 22px;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ButtonsContainer = styled.div`
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
  font-size: 15px;
  margin: 0.2em;
  height: 1.2em;
  text-decoration: none;
  overflow: hidden;
  outline:none;
  padding: 0.5em;
  width: 8.5vw;

  &:hover {
    background-color: black;
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
    width: 8vw;
  }
`;

export const ButtonLogo = styled.img`
  margin-right: 0.4em;
  padding: 0.2em;
  width: 15px;
`;

export const ProjectImage = styled.img`
  padding-top: 2.2em;
  width: 250px;
`;
