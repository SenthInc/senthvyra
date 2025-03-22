import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.JPG";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Github />

        <div className="profile-container">
          <h1 align="center">
            <a id="hi--im-Senth-Vyra" className="anchor" href="#hi--im-Senth-Vyra">
              Hi{" "}
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://raw.githubusercontent.com/nixin72/nixin72/master/wave.gif"
              >
                <img
                  src="https://raw.githubusercontent.com/nixin72/nixin72/master/wave.gif"
                  alt="Waving hand animated gif"
                  height="45"
                  width="45"
                  style={{ maxWidth: "100%" }}
                />
              </a>
              , I'm Senth
            </a>
          </h1>

          <div align="right">
            <img
              src="https://komarev.com/ghpvc/?username=senthvyra&label=Profile%20views&color=0e75b6&style=flat"
              alt="senthvyra"
            />
          </div>

          <h3 align="center">Connect with me:</h3>
          <p align="center">
            <a href="https://twitter.com/senthvyra" target="_blank" rel="noopener noreferrer">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                alt="senthvyra"
                height="30"
                width="40"
              />
            </a>
            <a href="https://linkedin.com/in/senthvyra" target="_blank" rel="noopener noreferrer">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="senthvyra"
                height="30"
                width="40"
              />
            </a>
            <a href="https://fb.com/senthvyra" target="_blank" rel="noopener noreferrer">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
                alt="senthvyra"
                height="30"
                width="40"
              />
            </a>
            <a href="https://instagram.com/senthvyra" target="_blank" rel="noopener noreferrer">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                alt="senthalanvyra"
                height="30"
                width="40"
              />
            </a>
            <a href="https://www.youtube.com/c/senth" target="_blank" rel="noopener noreferrer">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg"
                alt="senth"
                height="30"
                width="40"
              />
            </a>
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default About;
