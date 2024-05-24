import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
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
  font-size: 16px;

  &:hover {
    color: #666;
  }
`;

export const ToggleButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    display: block;
    align-self: center;
  }
`;
