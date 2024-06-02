import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

           
           Hello Everyone, I am <span className="purple">Jagadeesh </span>
            from <span className="purple"> Chennai, India.</span>
            <br />a recent graduate from Chennai, India. I hold a Bachelor's degree in Electronics and Communication Engineering from CIT.
            <br />
            <br />
            When I'm not diving deep into code, here’s what I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Web Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
          </ul>
          <p className="purple" >
            "Let the world to know of your existence"{" "}
          </p>
          <footer className="blockquote-footer">Jagadeesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
