import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  align-items: baseline;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  margin-bottom: 50px;
  padding: 1em;

  @media only screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.0em;
  width: 20%;
`;
