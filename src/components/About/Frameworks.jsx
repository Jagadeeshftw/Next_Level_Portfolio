import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiWeb3Dotjs,
  SiBootstrap,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiNextjsFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
    </Row>
  );
}

export default Frameworks;
