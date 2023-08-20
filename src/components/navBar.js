import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoTienda from './media/logoTienda.jpg';
import { NavLink, Link } from 'react-router-dom';
import './style.css';
import CartWidget from "./cartWidget"


function NavBarPrincipal() {

    return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to="/home"> 
          <img className="logoImg" src={logoTienda} alt="Logo Imagen" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className="btnHome" to="/home" >Home</NavLink>
              <NavLink className="btnHome"  to="/carrito" >
                Mis compras
              </NavLink>
              <CartWidget />
              <NavDropdown title="Nuestros productos" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                 <NavLink className="btnHome"  to={`/categoria/electrica`}>
                 Herramientas Electricas
                 </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <NavLink className="btnHome"  to={`/categoria/demano`}>
                  Herramientas de mano
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="btnHome"  to={`/categoria/insumos`}>
                  Insumos
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                <NavLink className="btnHome"  to="/productos">Todos</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
  
              
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
  


    </div>
    );
  }
  


export default NavBarPrincipal;