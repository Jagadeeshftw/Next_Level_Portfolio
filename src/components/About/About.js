import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Aboutcard from "./AboutCard";

import ProgrammingLanguages from "./ProgrammingLanguages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import Linuxdistros from "./Linuxdistros";
import DevOps from "./DevOps";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Discover<strong className="purple"> My Journey</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <h1 className="project-heading">
        Languages <strong className="purple">I Command </strong>
        </h1>
        <ProgrammingLanguages />

        <h1 className="project-heading">
        Frameworks <strong className="purple">I Master</strong>
        </h1>
        <Frameworks />

        <h1 className="project-heading">
        Database Systems <strong className="purple">I Depend On </strong>
        </h1>
        <Databases />

        <h1 className="project-heading">
        Linux Distros  <strong className="purple">I Navigate</strong>
        </h1>
        <Linuxdistros />

        <h1 className="project-heading">
        DevOps Skills <strong className="purple">I Excel In</strong>
        </h1>
        <DevOps />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
