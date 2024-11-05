import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import flor from '../assets/flor.gif';

function Navbarr() {
  return (
    <Navbar expand="lg" className="barra bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ana Martinez
          <img className='foton' src={flor}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;