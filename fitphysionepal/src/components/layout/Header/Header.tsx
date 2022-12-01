import { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { routeNavigation } from "../../../config/route-config";
import NavigationButton from "./atoms/NavigationButton";
import NavigationBrand from "./atoms/NavigationBrand";

const Header: FC = () => {
  const navigationButtons = routeNavigation.map((r) => {
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
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
