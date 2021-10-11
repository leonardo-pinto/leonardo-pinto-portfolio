import styled from 'styled-components';

const StyledBurger = styled.div`
  display: none;
  height: 2rem;
  position: fixed;
  right: 20px;
  top: 10px;
  width: 2rem;
  z-index: 20;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    height: 0.25rem;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default StyledBurger;
