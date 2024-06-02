import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUbuntu, FaDebian } from "react-icons/fa6";
import { SiRockylinux } from "react-icons/si";
import { FaCentos, FaFedora } from "react-icons/fa";
import { SiAlpinelinux } from "react-icons/si";

function Linuxdistros() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRockylinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCentos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDebian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFedora />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAlpinelinux />
      </Col>
    </Row>
  );
}

export default Linuxdistros;
