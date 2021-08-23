import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background-color: #808080;
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

  nav ul {
    list-style: none;
    text-align: center;
  }

  nav ul li {
    display: inline-block;
  }
  
  nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 10px;
  }

  nav ul li a,
  nav ul li a:after,
  nav ul li a:before {
    transition: all .5s;
  }

  nav ul li a:hover {
    color: #555;
  }

`;

export default StyledHeader;
