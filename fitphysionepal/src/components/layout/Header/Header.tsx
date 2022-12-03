import { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { routeNavigation } from "../../../config/route-config";
import NavigationButton from "./atoms/NavigationButton";
import NavigationBrand from "./atoms/NavigationBrand";
const Header: FC = () => {
  const navigationButtons = routeNavigation
    .filter((r) => r.routeName.toLowerCase() !== "appointment")
    .map((r) => {
      return <NavigationButton key={r.id} routeName={r.routeName} routeURL={r.routeURL} />;
    });

  const secondaryNavigationButton = routeNavigation
    .filter((r) => r.routeName.toLowerCase() === "appointment")
    .map((r) => {
      return <NavigationButton key={r.id} routeName={r.routeName} routeURL={r.routeURL} />;
    });

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <NavigationBrand />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">{navigationButtons}</Nav>
            <Nav>{secondaryNavigationButton}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
