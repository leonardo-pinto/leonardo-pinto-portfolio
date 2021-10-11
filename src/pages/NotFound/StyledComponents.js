import styled from 'styled-components';

export const SectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  height: 70vh;
  justify-content: center;

  @media only screen and (max-width: 768px) {
  }
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 700;
  margin-top: 2.5em;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Subtitle = styled.h3`
  color: #FFFFFF;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
