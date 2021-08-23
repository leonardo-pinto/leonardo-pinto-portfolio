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
  }
`;

export const Title = styled.h1`
  font-size: 2.0em;
`;

export const AboutText = styled.article`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  line-height: 1.2em;
  text-align: justify;
  width: 40%;

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  a:hover {
    color: black;
  }
`;
