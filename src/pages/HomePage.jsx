import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru } from "../data/index";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100  d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Temukan <br /> <span>Bakat Kreatifmu</span> Bersama Kami
              </h1>
              <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div>
                <button className="btn btn-danger btn-lg rounded-4 me-2 mb-xl-0 mb-2">Lihat Kelas</button>
                <button className="btn btn-outline-danger btn-lg rounded-4">Lihat Promo</button>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="Hero" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className=" kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Kelas</h1>
              <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas}>
                  <img src={kelas.image} alt="unsplash.com" />
                  <div className="star">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5>{kelas.title}</h5>
                  <div>
                    <p>{kelas.price}</p>
                    <button>{kelas.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
