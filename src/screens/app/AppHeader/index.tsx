/**
 * Module Dependencies
 */
import '@screens/app/AppHeader/style.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <Navbar bg="light" variant="light" className="app-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Neko Finder
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            target="_blank"
            eventKey={2}
            href="https://9gag.com/tag/cat"
          >
            #NekoMemes
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
