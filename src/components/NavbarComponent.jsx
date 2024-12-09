import {useState, useEffect} from "react"
import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {

  const [changeColor, setChangeColor] = useState(false);

  let navigate = useNavigate(); 

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener('scroll', changeBackgroundColor);
  }, []);

  return (
    <div>
      <Navbar expand="lg" className= {changeColor ? "color-active" : "" }>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}
           className="d-flex align-items-center"
           style={{ cursor: "pointer" }}>
            <img
              src="/Hasea.png"
              alt="Logo"
              width="50"
              height="50"
              className="me-2" 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending, isTransitioning }) =>
                        [
                          isPending ? "pending" : "",
                          isActive ? "active" : "",
                          isTransitioning ? "transitioning" : "",
                        ].join(" ")
                      } end >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center">
              <button className="btn-penawaran" >Penawaran</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
