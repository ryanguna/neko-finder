/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

const navigationLinks = [{ description: 'About', slug: '/cats' }];

function AppHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Neko Finder
        </Navbar.Brand>

        <Nav className="me-auto">
          {navigationLinks.map((navigationLink, index) => (
            <Nav.Link
              key={navigationLink.slug}
              as={Link}
              to={navigationLink.slug}
            >
              {navigationLink.description}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
