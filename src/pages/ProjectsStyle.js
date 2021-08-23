import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  align-items: baseline;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 2.0em;
  width: 20%;
`;
