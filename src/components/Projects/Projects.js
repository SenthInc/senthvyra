import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

// Import images for projects
import employeeSM from "../../Assets/Projects/employee-social.jpg";
import supermarket from "../../Assets/Projects/supermarket.jpg";
import foodStock from "../../Assets/Projects/food-stock.jpg";
import recycleApp from "../../Assets/Projects/recycle-app.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import tamilNLP from "../../Assets/Projects/tamilNLP.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Tamil Typing Assistant - NLP Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tamilNLP}
              isBlog={false}
              title="Tamil Typing Assistant - NLP"
              description="Led a research project on Tamil Natural Language Processing (NLP), focusing on spell checking, text summarization, grammar correction, and speech-to-text conversion using state-of-the-art AI models. Published in IEEE ICECET 2024."
              ghLink="https://lnkd.in/gXVCPQbp"
              demoLink="https://ieeexplore.ieee.org/document/10698527"
            />
          </Col>

          {/* Employee Social Media */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeeSM}
              isBlog={false}
              title="Employee Social Media"
              description="A social media platform designed for employees to connect, communicate, and collaborate effectively."
              ghLink="https://github.com/SenthVyra/Employee_Social_Media"
              demoLink=""
            />
          </Col>

          {/* Supermarket Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supermarket}
              isBlog={false}
              title="Supermarket Management System"
              description="A Java-based system that manages inventory, sales, and transactions in supermarkets."
              ghLink="https://github.com/SenthVyra/ITP_Y2S2"
              demoLink=""
            />
          </Col>

          {/* Food Stock Management Mobile App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodStock}
              isBlog={false}
              title="Food Stock Management Mobile App"
              description="A mobile application for monitoring food stock levels, ensuring optimized inventory management."
              ghLink="https://github.com/SenthVyra/MAD_Y2S2"
              demoLink=""
            />
          </Col>

          {/* Recycle App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recycleApp}
              isBlog={false}
              title="Recycle App"
              description="A MERN stack web app promoting sustainable recycling practices by connecting users with recycling centers."
              ghLink="https://github.com/SenthVyra/ITPM_Y3S2"
              demoLink=""
            />
          </Col>

          {/* E-commerce App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce App"
              description="An advanced e-commerce platform built using Laravel 11 and Livewire 3 for seamless online shopping experiences."
              ghLink="https://github.com/SenthVyra/Ecommerce-App"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
