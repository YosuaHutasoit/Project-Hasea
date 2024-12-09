import {Container, Row, Col} from "react-bootstrap"
import HeroBanner from '../assets/img/landingpage/Hero-Banner.png'

const LandingPage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1>Test</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eligendi error non animi iure, praesentium blanditiis excepturi a, ratione eum dicta ipsam nobis saepe dolorum eveniet similique, deserunt iste fugiat!</p>
          </Col>
          <Col> <img src={HeroBanner} alt="hero-img" /></Col>
        </Row>
      </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  )
}

export default LandingPage
