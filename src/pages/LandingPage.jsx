import { Container, Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";


import { Link } from "react-router-dom";

import HeroBanner from "../assets/img/landingpage/Hero-Banner.png";
import HeroBanner1 from "../assets/img/landingpage/Hero-Banner1.png";
import SNI from "../assets/img/SNI.png";
import KAN from "../assets/img/KAN.png";
import ISO from "../assets/img/ISO.png/";
import 'swiper/swiper-bundle.css';

// import {} from '../data/index'

const LandingPage = () => {
  return (
    <section>
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
      <div className="about-us">
        <div>
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
      </div>

      {/* List Products */}
      <div className="products">
        <div className="">
          <Container className="my-1">
            {/* Title */}
            <Row className="mb-3">
              <Col className="text-left">
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#007bff",
                    textTransform: "uppercase",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  KATALOG PRODUK
                </p>
                <p
                  style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    color: "#003EFA",
                    textTransform: "uppercase",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Produk Unggulan
                </p>
              </Col>
            </Row>

            {/* Swiper Slider */}
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              loop
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="text-center">
                  <img
                    src={HeroBanner}
                    alt="Steel Grating"
                    className="img-fluid"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>STEEL GRATING</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="text-center">
                  <img
                    src={HeroBanner}
                    alt="Plat Besi"
                    className="img-fluid"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>PLAT BESI</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="text-center">
                  <img
                    src={HeroBanner}
                    alt="Plat Besi"
                    className="img-fluid"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>PLAT BESI</p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="text-center">
                  <img
                    src={HeroBanner}
                    alt="Plat Besi"
                    className="img-fluid"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>PLAT BESI</p>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="text-center mt-4">
              <Link to="/products">
                <Button variant="primary">More →</Button>
              </Link>
            </div>
          </Container>
        </div>
      </div>

      {/* Sertifikasi */}
      <div
        className="certification-section"
        style={{ textAlign: "center", padding: "50px 0" }}
      >
        <Container>
          <h2
            className="display-5 mb-5"
            style={{ color: "#003EFA", fontWeight: "bold" }}
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
    </section>
  );
};

export default LandingPage;
