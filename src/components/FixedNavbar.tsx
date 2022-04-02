import {Container, Nav, Navbar} from 'react-bootstrap';

/**
 * The Navbar component at the top of the page.
 * @constructor
 */
function FixedNavbar(): JSX.Element {
  return (
    <Navbar bg="light" className="shadow" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Julian Wong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"/>
            <Nav.Link href="#link"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FixedNavbar;
