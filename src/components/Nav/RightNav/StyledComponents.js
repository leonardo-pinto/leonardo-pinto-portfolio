import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  list-style: none;
  li {
    padding: 18px 10px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  li a,
  li a:after,
  li a:before {
    transition: all .5s;
  }

  li a:hover {
    color: #555;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: auto;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export default Ul;
