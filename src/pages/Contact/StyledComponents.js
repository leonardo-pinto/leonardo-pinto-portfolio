import styled from 'styled-components';

export const ContactContainer = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 700;
  margin-top: 2em;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const LogoContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 3em;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

export const Logo = styled.img`
  width: 50px;

  @media only screen and (max-width: 768px) {
    width: 35px;
  }
`;
