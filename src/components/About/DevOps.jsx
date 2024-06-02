import React from "react";
import { Col, Row } from "react-bootstrap";
import {  SiKubernetes, SiOpenstack, SiVagrant, SiPuppet} from "react-icons/si";
import { FaDocker, FaGitAlt, FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiAnsible } from "react-icons/si";

function DevOps() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGitAlt />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiOpenstack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVagrant />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <FaJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPuppet />
      </Col>
    </Row>
  );
}

export default DevOps;
