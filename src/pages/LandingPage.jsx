import { Container, Row, Col, Button } from "react-bootstrap";
import HeroBanner from "../assets/img/landingpage/Hero-Banner.png";
import HeroBanner1 from "../assets/img/landingpage/Hero-Banner1.png";
import SNI from "../assets/img/SNI.png";
import KAN from "../assets/img/KAN.png";
import ISO from "../assets/img/ISO.png/";

// import {} from '../data/index'

const LandingPage = () => {
  return (
    <div>
      
      {/* Hero Banner */}
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

      {/* Hero Section */}
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
              <h2
                className="display-7 fw-bold mb-3"
                style={{ color: "#FF5733" }}
              >
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
                  style={{ borderRadius: "12px", fontSize: "15px" }}
                >
                  Read More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* List Products */}
      <div className="products">
        <div className="kelas w-100 min-vh-100"></div>
      </div>

      {/* Sertifikasi */}
      <div
        className="certification-section"
        style={{ textAlign: "center", padding: "50px 0" }}
      >
        <Container>
          <h2
            className="display-5 mb-5"
            style={{ color: "#007bff", fontWeight: "bold" }}
          >
            SERTIFIKASI
          </h2>
          <Row className="justify-content-center">
            <Col xs={12} sm={4} className="mb-4" style={{ fontWeight: "bold" }}>
              <img
                src={SNI}
                alt="SNI Certificate"
                className="img-fluid mb-4"
                style={{ maxWidth: "150px" }}
              />
              <p>SNI Certificate</p>
            </Col>
            <Col xs={12} sm={4} className="mb-4" style={{ fontWeight: "bold" }}>
              <img
                src={KAN}
                alt="KAN Certificate"
                className="img-fluid mb-3"
                style={{ maxWidth: "250px" }}
              />
              <p>KAN Certificate</p>
            </Col>
            <Col xs={12} sm={4} className="mb-4" style={{ fontWeight: "bold" }}>
              <img
                src={ISO}
                alt="ISO Certificate"
                className="img-fluid mb-4"
                style={{ maxWidth: "150px" }}
              />
              <p>ISO Certificate</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Help Section */}
      <div className="whatsapp">
        <div className="kelas w-100 min-vh-100"></div>
      </div>

      {/* Contact Us */}
      <div className="contactme">
        <div className="kelas w-100 min-vh-100"></div>
      </div>

      {/* Kirim Pesan*/}
      <div className="send-message">
        <div className="kelas w-100 min-vh-100"></div>
      </div>

    </div>
  );
};

export default LandingPage;
