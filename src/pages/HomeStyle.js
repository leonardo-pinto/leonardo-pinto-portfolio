import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  font-size: 1.2em;
  justify-content: center;
  padding: 10em;
`;
