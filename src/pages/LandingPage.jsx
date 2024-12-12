import { Container, Row, Col, Button } from "react-bootstrap";
import HeroBanner from "../assets/img/landingpage/Hero-Banner.png";
import HeroBanner1 from "../assets/img/landingpage/Hero-Banner1.png";

// import {} from '../data/index'

const LandingPage = () => {
  return (
    <div>
      <div className="homepage">
        <header
          className="hero-section"
          style={{ backgroundImage: `url(${HeroBanner})` }}
        >
          <div className="overlay">
            <Container className="text-light hero-content">
              <Row className="align-items-center">
                <Col md={12}>
                  <h1 className="hero-title">PT HASEA BEDIVAN ANUGERAH</h1>
                  <p className="hero-subtitle">
                    Solusi Penyedia Besi, Baja, & Material Terbaik Untuk Semua
                    Proyek Anda!
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </header>
      </div>
      <div className="about-us w-100 min-vh-100">
        <Container className="overflow-hidden">
          <Row className="gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
            <Col xs={12} lg={5} className="text-center">
              <img
                className="img-fluid"
                loading="lazy"
                src={HeroBanner1}
                alt="Art of Design"
                style={{}}
              />
            </Col>
            <Col xs={12} lg={6} className="order-1 order-lg-0">
              <h2 className="display-7 fw-bold mb-3" style={{ color: '#FF5733' }}>
                PT HASEA BEDIIVAN ANUGERAH
              </h2>
              <p className="fs-10 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Button
                  variant="primary"
                  size="lg"
                  className="bsb-btn-xl"
                  as="a"
                  href="/aboutus"
                  style={{ borderRadius: "12px",  fontSize: "15px" }}
                >
                  Read More...
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="products">
        <div className="kelas w-100 min-vh-100"></div>
      </div>
      <div className="contactme">
        <div className="kelas w-100 min-vh-100"></div>
      </div>
    </div>
  );
};

export default LandingPage;
