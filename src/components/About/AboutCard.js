import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Senthalan Vyravanathan </span> 
            from <span className="purple">Sri Lanka.</span>
            <br />
            I am a passionate <b className="purple">Software Engineer</b> with a strong background in 
            <b className="purple"> Full-Stack Development, Cloud & DevOps, and AI-driven solutions.</b>
            <br />
            I hold a <b className="purple">B.Sc. in Information Technology</b> from SLIIT and have gained experience in 
            developing web and mobile applications, cybersecurity, and system analysis.
            <br />
            <br />
            I am also the <b className="purple">Co-Founder of HABB</b>, a technology startup focused on delivering 
            innovative solutions in AI, cloud computing, and custom software development.
            <br />
            Apart from coding, I am a <b className="purple">YouTube Partner</b> with 12K+ subscribers, 
            engaging in tech discussions and digital content creation.
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Leading & Scaling Startups
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & Cloud Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Digital Content
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build, innovate, and inspire – because technology can change the world!"{" "}
          </p>
          <footer className="blockquote-footer">Senthalan Vyravanathan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;