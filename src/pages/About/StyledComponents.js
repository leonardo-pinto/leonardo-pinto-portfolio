import styled from 'styled-components';

export const AboutContainer = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  gap: 8em;
  margin-bottom: 4em;

  @media only screen and (max-width: 768px) {
    gap: 0; 
  }

  img {
    border-radius: 100%;

    @media only screen and (max-width: 768px) {
      margin-top: 2em;
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
  line-height: 1.5em;
  text-align: justify;
  width: 40%;

  @media only screen and (max-width: 768px) {
    margin-bottom: 5em;
    width: 80%;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  a:hover {
    color: black;
  }
`;
