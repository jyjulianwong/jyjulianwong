import { Container, Nav, Navbar } from "react-bootstrap";

function FixedNavbar(): JSX.Element {
  return (
    <Navbar bg="light" className="shadow" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Julian Wong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FixedNavbar;
