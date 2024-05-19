import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reverseSnake from "../../Assets/Projects/reverse_snake.png";
import pathVisualization from "../../Assets/Projects/path-visual.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathVisualization}
              isBlog={false}
              title="Path-Visualization"
              description="Finds a path depending on the algorithm from the starting point to an ending point. A path can be blocked by the user
              using walls. Generate a maze (Randomized DFS) and apply path-finding algorithms to the maze."
              link="https://jagadeeshftw.github.io/PathVisualization/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reverseSnake}
              isBlog={false}
              title="Blockade"
              description="Unlike the classic snake game where you control the snake to eat the food, here you are the food. You take control of the food
              and try to escape from the snake that’s coming to eat you. Here Snake uses a path-finding algorithm to find the shortest path to the location
              of the food and follows it avoiding any obstacles in between, it also grows in length over time."
              link="https://jagadeeshftw.github.io/Reverse_snake/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
