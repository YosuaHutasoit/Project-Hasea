import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent1 = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <div className="navbar-container">
        <Navbar.Brand href="/">
          <img
            src="/Hasea.png"
            alt="Logo"
            width="50"
            height="50"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Nav className="navbar-right">
          <Nav.Link href="/" className="custom-nav-link">
            Home
          </Nav.Link>
          <span className="custom-nav-text">About Us</span>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavbarComponent1;
