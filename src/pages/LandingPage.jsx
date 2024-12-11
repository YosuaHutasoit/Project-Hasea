import { Container, Row, Col, Button } from "react-bootstrap";
import HeroBanner from "../assets/img/landingpage/Hero-Banner.png";

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
      <div className="about-us">
        <div className="kelas w-100 min-vh-100">
          <Container className="overflow-hidden">
            <Row className="gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
              <Col xs={12} lg={6} className="order-1 order-lg-0">
                <h2 className="display-3 fw-bold mb-3">Art of Design</h2>
                <p className="fs-4 mb-4">
                  Powerful, extensible, and feature-packed frontend toolkit.
                  Build and customize with Sass, utilize prebuilt grid system
                  and components, and bring projects to life with powerful
                  JavaScript plugins.
                </p>
                <div className="d-grid gap-2 d-sm-flex">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bsb-btn-xl rounded-pill"
                    as="a"
                    href="/aboutus"
                  >
                    Free Consultation
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
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
