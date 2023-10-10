import styled from 'styled-components';

export const AboutWrapper = styled.section`
`;

export const AboutContainer = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  gap: 8em;
  margin: 0 auto;
  width: 70%;

  @media only screen and (max-width: 768px) {
    gap: 0;
    width: 90%;
  }

  img {
    border-radius: 100%;

    @media only screen and (max-width: 768px) {
      margin-top: 4em;
      width: 30%;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 700;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const AboutText = styled.article`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  line-height: 2em;
  text-align: justify;

  @media only screen and (max-width: 768px) {
    line-height: 1.5em;
    margin-bottom: 5em;
    width: 80%;
  }
`;
