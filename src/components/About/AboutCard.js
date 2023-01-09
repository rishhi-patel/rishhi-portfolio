import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{ textAlign: "left" }}>
        <blockquote className="blockquote mb-0">
          <p>
            Hi Everyone, I am <span className="purple">Rishikumar Amrutbhai Patel </span>
            from <span className="purple"> Ankleshwar, India.</span>
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Set your heart ablaze, go beyond your limits!"{" "}
          </p>
          <footer className="blockquote-footer">Kyōjurō Rengoku</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
