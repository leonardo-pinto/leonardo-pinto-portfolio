import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  align-items: baseline;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  justify-content: space-evenly;
`;
