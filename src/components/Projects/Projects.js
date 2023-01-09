import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"

const ProjectArr = [
  {
    title: "Geometra",
    imgPath:
      "https://uploads-ssl.webflow.com/6232e5f33ee2ea50a71002f3/62b2e08abfa17410637088ee_Resized%20Geometra.png",
    link: "https://geometra.rukkor.io",
    description:
      "Geometra is a specialised tool for the construction industry. It supports 2D/PDF drawings, 3D/IFC models and allows you to create competitive tenders using 2D, 3D and BIM alongside a fully customisable cost estimation framework.",
  },
  {
    title: "Dz Forms",
    imgPath:
      "https://user-images.githubusercontent.com/53328265/147442306-4f367a77-2c2b-47c9-9ea8-7439337eaa69.png",
    link: "https://dz-forms.netlify.app",
    description:
      "Select from multiple question types, drag-and-drop to reorder questions & customise values. Everything you need to get anything done, now in one place.",
  },
  {
    title: "My Cart Pro",
    imgPath:
      "https://user-images.githubusercontent.com/53328265/162624863-065ab2f9-3dc9-4401-a90d-c0dbe3cf9273.png",
    link: "https://my-cart-pro.netlify.app",
    description: "Full featured shopping cart Product, reviews and ratings, profile with orders & Admin product management, Admin user managementAdmin Order details page, Mark orders as delivered optionCheckout process, PayPal / credit card integration",
  },
  {
    title: "Smart-Health",
    imgPath:
       "https://user-images.githubusercontent.com/53328265/162624674-56d1dc62-9563-4e63-a166-b169ad44b1fe.png",
    link: "https://dev-staging-smarth-health-service.netlify.app/#home",
    description:
      "The Smart Health Care is to provide a patient or any customer an easy way to Booking appointments",
  },
]

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently or gave Contributions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectArr.map((project, i) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                link={project.link}
                key={i}
              />
            </Col>
          ))}
          }
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
