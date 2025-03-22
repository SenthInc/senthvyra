import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

// Tamil NLP Project Image

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={`${title} screenshot`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {/* GitHub Button */}
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {/* Demo Button - Shown only if a demo link is available */}
        {demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
