import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import reverseSnake from "../../Assets/Projects/reverse_snake.png";
import pathVisualization from "../../Assets/Projects/path-visual.png";
import timeQuest from "../../Assets/Projects/time_quest.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
        What  <strong className="purple"> I've Been Up To </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are some of the innovative projects I’ve recently brought to life.
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timeQuest}
              isBlog={false}
              title="Ultimate Time Quest"
              description="Embark on The Ultimate Time Quest is an exciting and interactive web application designed to challenge your time management skills and precision. Dive into a series of captivating time-based challenges and race against the clock to achieve the highest score. Whether you're looking to test your quick reflexes or improve your punctuality, this app provides an engaging and fun way to master the art of timing."
              link="https://timequest.netlify.app/#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
