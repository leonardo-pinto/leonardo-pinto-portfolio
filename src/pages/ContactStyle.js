import styled from 'styled-components';

export const ContactWrapper = styled.section`
  align-items: baseline;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  margin-top: 2em;
  padding: 2em;

  @media only screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin-top: 0;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.0em;
  width: 20%;

  @media only screen and (max-width: 768px) {
      margin: 1em 0;
    }
`;
