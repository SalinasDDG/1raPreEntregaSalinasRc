import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoTienda from './components/media/logoTienda.jpg';
import './App.css';

function NavScrollExample() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img class="logoImg" src={logoTienda} alt="Logo Imagen" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Nuestros productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Categoria01</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Categoria02
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Todos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Contáctenos</Nav.Link>

            <Nav.Link href="#" >
              Mis compras
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="¿Qué estás buscando?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div class="subtitulo">
    <h4>¡Tienda mayorista! ¡Lo mejor para tus clientes siempre!</h4>
    </div>
</div>
  );
}

export default NavScrollExample;
