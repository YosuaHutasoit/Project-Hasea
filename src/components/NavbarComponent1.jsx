import { Navbar, Nav, Breadcrumb } from "react-bootstrap";
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
        
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
          </Breadcrumb>
        
      </div>
    </Navbar>
  );
};

export default NavbarComponent1;
