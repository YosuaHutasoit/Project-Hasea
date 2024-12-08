import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="/Hasea.png" // Ganti path sesuai dengan lokasi file logo
              alt="Logo"
              width="50"
              height="50"
              className="me-2" // Memberi margin di sebelah kanan logo
            />
          </Navbar.Brand>
          Hasea
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => {
                return (
                  <div key={link.id}>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </div>
                );
              })}
            </Nav>

            <div>
              <button>Penawaran</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
