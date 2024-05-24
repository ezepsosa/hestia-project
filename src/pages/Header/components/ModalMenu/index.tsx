import { useEffect, useRef } from "react";
import {
  ModalContent,
  ModalWrapper,
  Navbar,
  NavbarList,
  NavItem,
  NavLink,
} from "./styles";
import { Props } from "./types";

export function ModalMenu({ routes, closeFunction }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      console.log("&&");
      console.log(modalRef.current);
      console.log(event.target as Node);
      if (modalRef.current && modalRef.current == (event.target as Node)) {
        closeFunction();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [closeFunction]);

  return (
    <ModalWrapper ref={modalRef}>
      <ModalContent>
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
      </ModalContent>
    </ModalWrapper>
  );
}
