import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { BiLinkExternal } from "react-icons/bi"

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ maxHeight: 550 }}>
      {/* <Card.Img
        variant="top "
        src={props.imgPath}
        alt="card-img"
        style={{ height: "50%" }}
      /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-center">{props.description}</Card.Text>
      </Card.Body>
      <Button
        variant="primary"
        href={props.link}
        target="_blank"
        style={{
          // position: "absolute",
          bottom: 5,
          left: 5,
          // width: "calc(100% - 20px)",
          margin: 5,
        }}
      >
        <BiLinkExternal /> &nbsp;
        {props.isBlog ? "View Blog" : "View Project"}
      </Button>
    </Card>
  )
}
export default ProjectCards
