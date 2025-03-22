import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import myImg from "../../Assets/avatar.jpg";

function Home2() {
  const [reviews, setReviews] = useState([]);
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY; // Using environment variable
  const PLACE_ID = process.env.REACT_APP_PLACE_ID; // Using environment variable

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
        );

        if (response.data.result && response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        } else {
          console.error("No reviews found in the response data.");
        }
      } catch (error) {
        console.error("Error fetching Google reviews:", error.response || error.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontWeight: "bold" }}>
              Hi there! I'm <span className="purple">Senthalan Vyravanathan</span>
            </h1>
            <p className="home-about-body">
              I’m a passionate and driven software engineer, always excited to create innovative solutions and tackle challenges that make a positive impact in the tech industry. 🚀
              <br />
              <br />
              With a B.Sc. in Information Technology from <b className="purple">SLIIT</b>, I have expertise in <b className="purple">Java, React, MERN</b>, and Agile methodologies. My journey has led me through exciting projects in:
              <i>
                <b className="purple"> Web Development, Mobile Apps, Security Analysis</b>
              </i>
              <br />
              <br />
              I am also deeply fascinated by <b className="purple">Blockchain</b> technology and enjoy building products with <b className="purple">Node.js</b> and frameworks like <b className="purple">React.js, Next.js</b>.
              <br />
              <br />
              Beyond coding, I am a content creator and a YouTube partner with 12K subscribers. I actively engage with a vibrant online community of <b className="purple">100K+ followers</b> on social platforms.
              <br />
              <br />
              I believe in the power of collaboration and open-minded perspectives. Let's connect and work together on meaningful projects that drive innovation and make a difference! 💡
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
              <img src={myImg} className="img-fluid" alt="avatar" />
              </ScrollAnimation>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/SenthVyra" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.facebook.com/SenthVyra" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/SenthVyra/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/SenthVyra" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.youtube.com/Senth" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://twitter.com/SenthVyra" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-reviews">
            <h1>What People Say About Me</h1>
            <div className="google-reviews">
              {reviews.length > 0 ? (
                <ul>
                  {reviews.map((review, index) => (
                    <li key={index}>
                      <p><strong>{review.author_name}</strong>: {review.text}</p>
                      <p>⭐ {review.rating}/5</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews available</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
