import styled from 'styled-components';

export const AboutWrapper = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-evenly;
  margin-top: 2em;
  padding: 2em;

  img {
    border-radius: 100%;

    @media only screen and (max-width: 768px) {
      margin: 2em 0;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.0em;
  margin-bottom: 1.25em;
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
    width: 90%;
  }

  p {
    padding-bottom: 1.2em;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  a:hover {
    color: black;
  }
`;
