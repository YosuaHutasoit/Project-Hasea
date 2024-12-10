import {Container, Row, Col} from "react-bootstrap"
import HeroBanner from '../assets/img/landingpage/Hero-Banner.png'
import HeroBanner1 from '../assets/img/landingpage/Hero-Banner1.png'

// import {} from '../data/index'
import { useNavigate } from "react-router-dom"

const LandingPage = () => {

  let navigate = useNavigate()

  return (
  <div>
    <div className="homepage">
      {/* <header className="hero-section" style={{ backgroundImage: `url(${HeroBanner})` }}>
        <div className="overlay">
          <Container className="text-light hero-content">
            <Row className="align-items-center">
              <Col md={12}>
                <h1 className="hero-title">PT HASEA BEDIVAN ANUGERAH</h1>
                <p className="hero-subtitle">
                  Solusi Penyedia Besi, Baja, & Material Terbaik Untuk Semua Proyek Anda!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </header> */}
      </div>
    <div className="about-us">
      {/* <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <img src={HeroBanner1} alt="hero-img" />
            </Col>
            <Col>
            <h1>PT HASEA BEDIIVAN ANUGERAH</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum harum sed a quisquam illo reprehenderit doloribus inventore? Ratione rem cum earum eligendi quos error harum! Ex quas deserunt nemo culpa, modi impedit quam illum vero in. Quae neque natus assumenda sint unde sed ut ipsum laudantium voluptatibus. Nam, delectus.</p>
            <button onClick={() => navigate('/aboutus')}>read more..</button>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
    <div className="products">
      <div className="kelas w-100 min-vh-100"></div>
    </div>
    <div className="contacme">
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  </div>
  );
};

export default LandingPage
