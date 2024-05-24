import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Definimos los estilos del modal
export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  animation: ${slideIn} 0.3s ease-out;
`;

export const ModalContent = styled.div`
  background-color: #15cdff0f;
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  animation: ${slideIn} 0.3s ease-out;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;

export const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 2rem;

  &:hover {
    color: #666;
  }
`;
