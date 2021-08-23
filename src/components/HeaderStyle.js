import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  p {
    color: #FFFFFF;
    font-size: 1.2em;
    letter-spacing: 0.05em;
    margin-left: 1rem;
  }

  nav {
    display: flex;
    margin-right: 1rem;
  }

  nav a {
    color: #FFFFFF;
    letter-spacing: 0.1em;
    margin: 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export default StyledHeader;
