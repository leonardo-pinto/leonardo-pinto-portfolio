import styled from 'styled-components';

const Section = styled.section`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  font-size: 1.2em;
  line-height: 3em;
  justify-content: center;
  padding: 8em;

  @media only screen and (max-width: 768px) {
    padding: 10em 1em;
  }
`;

export default Section;
