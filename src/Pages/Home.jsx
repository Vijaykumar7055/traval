import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../src/assets/images/hero-img01.jpg";
import heroImg02 from "../../src/assets/images/hero-img02.jpg";
import herovideo from "../../src/assets/images/hero-video.mp4";
import worldImg from "../../src/assets/images/world.png";
import Subtitle from "../Shared/Subtitle";
import SearchBar from "../Shared/SearchBar";
import ServiceList from "../services/ServiceList";
const Home = () => {
  return (
    <>
      {/* ==========Hero Section Start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center justify-content-center">
                  <Subtitle subtitle={"know before you"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traviling open the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus quibusdam, quo, eum, nemo corporis praesentium
                  minus recusandae mollitia unde at optio! Quasi, mollitia
                  corporis cupiditate iure facilis itaque veritatis doloremque.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__video-box  mt-4">
                <video src={herovideo} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ==========Hero Section end ============= */}

      <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">
                What we serve
            </h5>
            <h2 className="services__title">
                We offer our best Services
            </h2>
          </Col>
          <ServiceList />
        </Row>



      </Container>
      </section>
    </>
  );
};

export default Home;
