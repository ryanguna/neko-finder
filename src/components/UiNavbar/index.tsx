/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

function UiNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/test">
            Test
          </Nav.Link>
          <Nav.Link as={Link} to="/cats">
            Cats
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default UiNavbar;
