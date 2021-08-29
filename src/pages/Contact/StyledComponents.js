import styled from 'styled-components';

export const ContactContainer = styled.section`
  align-items: baseline;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  gap: 2em;

  @media only screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
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
