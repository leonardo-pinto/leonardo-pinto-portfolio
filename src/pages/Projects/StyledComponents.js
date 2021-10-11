import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  margin-bottom: 5em;

  @media only screen and (max-width: 768px) {
    align-items: center;
    gap: 0;
  }
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
