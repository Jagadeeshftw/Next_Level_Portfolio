import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Block Chain & Full Stack Developer hailing from
              Chennai, India. My journey in the realm of technology has been
              fueled by my deep love for coding and problem-solving.
              <br />
              <br />
              With a strong foundation in
              <i>
                <b className="purple">
                  {" "}
                  Solidity, React, Node.js, and Blockchain technologies{" "}
                </b>
              </i>
              , I thrive in building scalable and efficient web applications.
              <br />
              <br />
              My skills extend to
              <i>
                <b className="purple">
                  {" "}
                  managing databases, orchestrating containers, and implementing
                  CI/CD pipelines{" "}
                </b>
              </i>
              to ensure seamless deployment and maintenance of applications.
              <br />
              <br />
              I'm particularly passionate about creating
              <i>
                <b className="purple">
                  {" "}
                  decentralized applications (dApps) on Ethereum and other
                  blockchain platforms
                </b>
              </i>
              , exploring the endless possibilities of blockchain technology.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Jagadeeshftw"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jagadeesh-b-042b38208/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
