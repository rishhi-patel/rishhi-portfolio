import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import myImg from "../../Assets/avatar.png"
import Tilt from "react-parallax-tilt"
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body text-center">
              <b className="purple"> independent</b> and{" "}
              <b className="purple"> self-motivated</b> professional developer,
              responsible for working on both
              <b className="purple"> front-end</b> and{" "}
              <b className="purple">back-end</b> development and maintaining
              fully-fledged and functioning platforms with databases or servers
              <br />
              <br />
              My field of Interest's are building new{" "}
              <i>
                <b className="purple">Web Applications </b> and{" "}
                <b className="purple">APIs</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <b className="purple"> third-party applications</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rishhi-patel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/assinix1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rishi-patel-a0a7021a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rishhi._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
