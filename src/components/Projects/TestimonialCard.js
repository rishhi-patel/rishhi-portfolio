import React from "react"
import Card from "react-bootstrap/Card"

function TestimonialCard({ testimonial }) {
  const { name, review, position } = testimonial
  return (
    <Card className="project-card-view" style={{ maxHeight: 550 }}>
      <Card.Body>
        <Card.Text className="text-center">{review}</Card.Text>
        <Card.Title>- {name}</Card.Title>
        <Card.Title>({position})</Card.Title>
      </Card.Body>
    </Card>
  )
}
export default TestimonialCard
