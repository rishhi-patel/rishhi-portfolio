import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"
import TestimonialCard from "./TestimonialCard"

const ProjectArr = [
  {
    title: "Splitter Sync",
    imgPath:
      "https://uploads-ssl.webflow.com/6232e5f33ee2ea50a71002f3/62b2e08abfa17410637088ee_Resized%20Geometra.png",
    link: "https://github.com/SplitterSync/splitter_sync",
    description:
      "Splitter_Sync is a powerful and intuitive mobile app designed to make splitting expenses a breeze. Inspired by the functionality of Splitwise.",
  },
  {
    title: "Geometra",
    imgPath:
      "https://uploads-ssl.webflow.com/6232e5f33ee2ea50a71002f3/62b2e08abfa17410637088ee_Resized%20Geometra.png",
    link: "https://www.rukkor.com/geometra",
    description:
      "Geometra is a specialised tool for the construction industry. It supports 2D/PDF drawings, 3D/IFC models and allows you to create competitive tenders using 2D, 3D and BIM alongside a fully customisable cost estimation framework.",
  },
  {
    title: "Eespacecarre-Ecommerce",
    imgPath:
      "https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_1920x1200/https://d33wubrfki0l68.cloudfront.net/659e2bfdf9a2b60008282e98/screenshot_2024-01-10-05-33-57-0000.webp",
    link: "https://github.com/e-commerce-pro/e-commerce-client",
    description:
      "A user-friendly e-commerce app designed for seamless shopping experiences. It features a sleek, intuitive interface with advanced search capabilities, personalized recommendations, and secure checkout options.",
  },
  {
    title: "Eespacecarre-Admin",
    imgPath:
      "https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_1920x1200/https://d33wubrfki0l68.cloudfront.net/659e9500add0ef00083b153a/screenshot_2024-01-10-13-02-23-0000.webp",
    link: "https://github.com/e-commerce-pro/e-commerce-admin-client",
    description:
      "A comprehensive e-commerce admin panel offering real-time analytics, inventory management, and order tracking. Equipped with user-friendly dashboards for efficient site management and customer support tools.",
  },
]

const Testimonials = [
  {
    review:
      "Working with Rishi Patel has been an absolute pleasure. His expertise in the MERN stack is truly impressive. Not only did he deliver exceptional results, but his professionalism and communication throughout the project were outstanding. Rishi's ability to understand our requirements and translate them into a functional and aesthetically pleasing web application exceeded our expectations. He consistently went above and beyond to ensure that our project was completed on time and within budget. I highly recommend Rishi to anyone seeking a skilled MERN stack developer.",
    name: "Shrunjal Mehta",
    position: "Chief Executive Officer at Konzept Solutions",
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
        <h1 className="project-heading">
          Client's <strong className="purple">Feedbacks</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {Testimonials.map((testimonial, i) => (
            <Col md={4} className="project-card">
              <TestimonialCard testimonial={testimonial} key={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
