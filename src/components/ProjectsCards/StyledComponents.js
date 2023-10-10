import styled from 'styled-components';

export const ProjectsCardsContainer = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-evenly;
  margin-bottom: 10em;
`;

export const ProjectCard = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-evenly;
  margin-bottom: 3em;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectCardInfo = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  width: 40%;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h3`
  color: #FFFFFF;
  font-size: 26px;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: justify;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  @media only screen and (max-width: 768px) {
    justify-content: start;
  }
`;

export const Tags = styled.li`
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  color: #FFFFFF;
  font-size: 12px;
  line-height: 1.5em;
  margin-bottom: 0.5em;
  margin-left: 0.5em;
  padding: 0.5em 0.7em;

  &:hover {
    background-color: white;
    border: 1px solid #808080;
    color: #808080;
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

export const ProjectLink = styled.a`
  align-items: center;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: 1px solid #FFFFFF;
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
    opacity: 1.0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
    width: 15vw;
  }
`;

export const ButtonLogo = styled.img`
  margin-right: 0.4em;
  padding: 0.2em;
  width: 15px;
`;

export const ProjectImage = styled.img`
  border-radius: 10px;
  height: 225px;
  width: 450px;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
