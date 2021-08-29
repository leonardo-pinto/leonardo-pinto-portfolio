import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  background-color: #808080;
  display: flex;
  height: 3em;
  padding: 0 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  `;

export const Title = styled.div`
  color: #fff;
  font-size: 1.2em;

  @media (max-width: 768px) {
    display: none;
  }
`;
