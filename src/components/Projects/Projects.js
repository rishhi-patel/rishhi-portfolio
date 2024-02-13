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
    title: "Eespacecarre-Ecommerce",
    imgPath:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/98315242/304305102-580f8ea1-b982-45e3-9c1a-7e1be5d3d05e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T054636Z&X-Amz-Expires=300&X-Amz-Signature=851862ed3502656e6a9e57d41f8f736c40489481ea0f943897a6925e43f24295&X-Amz-SignedHeaders=host&actor_id=98315242&key_id=0&repo_id=526617351",
    link: "https://espacecarre.com",
    description:
      "A user-friendly e-commerce app designed for seamless shopping experiences. It features a sleek, intuitive interface with advanced search capabilities, personalized recommendations, and secure checkout options.",
  },
  {
    title: "Eespacecarre-Admin",
    imgPath:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/98315242/304305048-6b6ce114-e94f-425c-8359-ba9408cc30d6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T054753Z&X-Amz-Expires=300&X-Amz-Signature=795bedae4105f99f9a960e325ac947aa591178fac67b9ed0243d808f0739e258&X-Amz-SignedHeaders=host&actor_id=98315242&key_id=0&repo_id=526617351",
    link: "https://admin.panel.espacecarre.com",
    description:
      "A comprehensive e-commerce admin panel offering real-time analytics, inventory management, and order tracking. Equipped with user-friendly dashboards for efficient site management and customer support tools.",
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
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
