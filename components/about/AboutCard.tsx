import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="quote-card-view p-6 mb-6 text-center">
      <div className="card-body">
        <blockquote className="blockquote mb-0  px-4 md:px-20 text-xl">
          <p className="text-justify">
            Hello Everyone, I am <span className="purple">Jagadeesh </span>
            from <span className="purple">Chennai, India.</span>
            <br />a recent graduate from Chennai, India. I hold a
            Bachelor&apos;s degree in Electronics and Communication Engineering
            from CIT.
            <br />
            <br />
            When I&apos;m not diving deep into code, here’s what I love to do:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li className="about-activity">
              <ImPointRight className="inline mr-2 purple" /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight className="inline mr-2 purple" /> Watching Web
              Series
            </li>
            <li className="about-activity">
              <ImPointRight className="inline mr-2 purple" /> Listening Songs
            </li>
          </ul>
          <p className="purple mt-4">
            &quot;Let the world know of your existence&quot;{" "}
          </p>
          <footer className="blockquote-footer mt-2">- Jagadeesh</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;
