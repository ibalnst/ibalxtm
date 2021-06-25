import { Navbar, Nav} from 'react-bootstrap';
import{LinkContainer} from 'react-router-bootstrap';

const Navbars = () => {
    return (
      <>
      <Navbar bg="dark" variant="dark" expand="sm">
      <LinkContainer to='/home'>
      <Navbar.Brand>Ibal x TM</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        {/* <LinkContainer to='/home' >
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/Gigs'>
          <Nav.Link>Gigs</Nav.Link>
        </LinkContainer> */}
        <LinkContainer to='/mixtapes'>
          <Nav.Link>Mixtape</Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to='/contact'>
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/about'>
          <Nav.Link>About</Nav.Link>
        </LinkContainer> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    )
}

export default Navbars
