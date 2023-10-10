import styled from 'styled-components';

export const SectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  height: 100vh;
  justify-content: center;

  @media only screen and (max-width: 768px) {
  }
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.h3`
  color: #FFFFFF;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 2rem;
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
  padding: 0.7em;
  width: 8.5vw;

  &:hover {
    background-color: white;
    border: 1px solid #808080;
    color: #808080;
    opacity: 1.0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
    width: 15vw;
  }
`;
