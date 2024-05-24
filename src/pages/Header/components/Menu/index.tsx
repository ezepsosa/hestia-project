import { useState } from "react";
import {
  Container,
  Navbar,
  NavbarList,
  NavItem,
  NavLink,
  ToggleButton,
} from "./styles";
import { Props } from "./types";
import { ModalMenu } from "../ModalMenu";

export function MenuHeader({ routes }: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <Container>
      <ToggleButton onClick={toggleNavbar}>☰</ToggleButton>
      <Navbar>
        {routes.map((route) => {
          return (
            <NavbarList key={route}>
              <NavItem>
                <NavLink>{route}</NavLink>
              </NavItem>
            </NavbarList>
          );
        })}
      </Navbar>
      {navbarOpen ? (
        <ModalMenu closeFunction={() => setNavbarOpen(false)} routes={routes} />
      ) : null}
    </Container>
  );
}
