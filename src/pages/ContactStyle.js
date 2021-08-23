import styled from 'styled-components';

export const ContactWrapper = styled.section`
  align-items: baseline;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  margin-top: 2em;
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 2.0em;
  width: 20%;
`;
