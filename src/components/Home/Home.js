import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Home3D from "./Home_3D.js"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <strong style={{ paddingBottom: 15 }} className="heading">
                HELLO{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </strong>

              <strong className="heading-name">
                I AM
                <strong className="main-name"> ELISE JI</strong>
              </strong>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="container-3d">
                <Home3D />
              </div>
              

              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>

    
  );
}

export default Home;
