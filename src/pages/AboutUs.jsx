import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container fluid className="pt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>About Us</h1>
          <p>
            Welcome to PT Hasea Bedivan Anugerah! We provide high-quality steel,
            iron, and materials for your projects. With a commitment to
            excellence, we are your trusted partner for construction and
            engineering materials.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
