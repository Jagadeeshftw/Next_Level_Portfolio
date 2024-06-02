import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiMysql,
  SiMongodb,
  SiSequelize,
} from "react-icons/si";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiSequelize />
      </Col>
    </Row>
  );
}

export default Databases;
