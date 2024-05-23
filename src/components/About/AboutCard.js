import React from "react"
import Card from "react-bootstrap/Card"
import { ImPointRight } from "react-icons/im"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{}}>
        <blockquote className="blockquote mb-0">
          <p>
            I am a seasoned <span className="purple">Full Stack Developer</span>{" "}
            with expertise in{" "}
            <span className="purple">
              web, mobile, and AI software development
            </span>
            , currently enhancing{" "}
            <span className="purple">AI model training</span> at Outlier.
            Previously, I led development projects at{" "}
            <span className="purple">Konzept Solutions</span> in India. I
            possess strong skills in programming languages and frameworks such
            as{" "}
            <span className="purple">
              Java, Dart, JavaScript, Spring Boot, Node.js,
            </span>{" "}
            and <span className="purple">Flutter</span>, along with database and
            cloud technologies like{" "}
            <span className="purple">MongoDB, Oracle,</span> and{" "}
            <span className="purple">AWS</span>. I am completing my studies in{" "}
            <span className="purple">
              Reporting System & Database Management
            </span>{" "}
            at <span className="purple">Conestoga College</span> and hold a
            Bachelor’s in <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Parul University</span>. My work has earned
            me accolades like the{" "}
            <span className="purple">Unmatched Dedication Award</span> and{" "}
            <span className="purple">Super Squad Award</span> in 2022.
          </p>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Set your heart ablaze, go beyond your limits!"{" "}
          </p>
          <footer className="blockquote-footer">Kyōjurō Rengoku</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
