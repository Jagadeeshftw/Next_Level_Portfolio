import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  const themeInput = {
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["white", "#A0A0A0", "#808080", "#606060", "#404040"],
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={12}>
        <div>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Code</strong>
          </h1>
          <GitHubCalendar
            username="jagadeeshftw"
            blockSize={16}
            blockMargin={5}
            colorScheme={"dark"}
            theme={themeInput}
            fontSize={16}
          />
        </div>
      </Col>
    </Row>
  );
}

export default Github;
