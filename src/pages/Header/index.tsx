import { MenuHeader } from "./components/Menu";
import { Container, Logo } from "./styles";

export function Header() {
  const menuRoutes: string[] = [
    "Inicio",
    "Promociones",
    "Comunicaciones",
    "Quines somos",
    "Contacto",
  ];
  return (
    <Container>
      <Logo>Hestia</Logo>
      <MenuHeader routes={menuRoutes} />
    </Container>
  );
}
