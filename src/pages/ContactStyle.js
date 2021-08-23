import styled from 'styled-components';

export const ContactWrapper = styled.section`
  align-items: baseline;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  justify-content: space-evenly;
`;
