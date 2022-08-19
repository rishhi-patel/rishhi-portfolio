import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{ textAlign: "left" }}>
        <blockquote className="blockquote mb-0">
          <p>
            Hi Everyone, I am <span className="purple">Rishi Patel </span>
            from <span className="purple"> Ankleshwar, India.</span>
            <br />
            Working as a Full stack Dev at Dignizant Technology
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "The Best Thing About Time is, it Changes!"{" "}
          </p>
          <footer className="blockquote-footer">Rishi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
