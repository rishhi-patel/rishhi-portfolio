import React from "react"
import Card from "react-bootstrap/Card"
import { ImPointRight } from "react-icons/im"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{ textAlign: "left" }}>
        <blockquote className="blockquote mb-0">
          <p>
            An experienced <span className="purple">Full Stack Developer</span>{" "}
            with a robust background in <span className="purple">web</span> ,
            <span className="purple">mobile</span> and{" "}
            <span className="purple">AI software development</span>. Currently,
            I am honing my skills in{" "}
            <span className="purple">AI model training</span> at{" "}
            <span className="purple">Outlier</span>, where I am dedicated to
            enhancing <span className="purple">response accuracy</span> and{" "}
            <span className="purple">functionality</span>. Previously, I led
            diverse development teams at{" "}
            <span className="purple">Konzept solutions</span> in{" "}
            <span className="purple">India</span>, focusing on comprehensive
            solutions from <span className="purple">inception </span> to
            <span className="purple"> deployment</span>. My technical expertise
            spans across advanced programming languages and frameworks,
            including <span className="purple">Java</span>,{" "}
            <span className="purple"> Dart</span>,
            <span className="purple"> JavaScript</span>,{" "}
            <span className="purple"> Spring Boot</span>,{" "}
            <span className="purple"> Node.js</span>, and{" "}
            <span className="purple">Flutter</span>, complemented by a solid
            foundation in database and cloud technologies like{" "}
            <span className="purple">MongoDB</span>,{" "}
            <span className="purple">Oracle</span>, and{" "}
            <span className="purple">AWS</span>. In my academic pursuit, I'm
            enhancing my specialization in{" "}
            <span className="purple">
              Reporting System & Database Development
            </span>{" "}
            at <span className="purple">Conestoga College</span>, backed by a
            Bachelor’s in{" "}
            <span className="purple">Computer Science & Engineering</span> from{" "}
            <span className="purple">Parul University</span>. Recognized for my
            <span className="purple"> dedication</span> and{" "}
            <span className="purple">collaborative skills</span>, I've earned
            accolades such as the{" "}
            <span className="purple">Unmatched Dedication Award</span> and the{" "}
            <span className="purple">Super Squad Award</span> in 2022. I am
            passionate about using my technical knowledge and leadership skills
            to drive <span className="purple">technology advancement</span> and
            am always eager to connect with like-minded{" "}
            <span className="purple">professionals</span> and potential{" "}
            <span className="purple">collaborators</span>.
            <br />
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
