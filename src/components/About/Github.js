import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={12}>
        <div>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Code</strong>
          </h1>
          <GitHubCalendar
            username="jagadeeshftw"
            blockSize={19}
            blockMargin={5}
            color="#c0c0c0"
            fontSize={16}
          />
        </div>
      </Col>
    </Row>
  );
}

export default Github;
