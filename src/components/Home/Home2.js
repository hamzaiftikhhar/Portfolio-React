import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BRIEF <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              I am a final-year Computer Science student at COMSATS University Lahore, passionate about
              developing scalable and user-friendly web applications.
              <br />
              <br />My expertise spans both frontend and backend technologies, including
              <i>
                <b className="purple"> React.js, Node.js, Flask, and Python. </b>
              </i>
              <br />
              <br />I have worked on various projects, including
              <i>
                <b className="purple"> task management apps, cybersecurity tools, and e-commerce platforms. </b>
              </i>
              <br />
              <br />Beyond coding, I enjoy problem-solving and working in collaborative environments. My goal
              is to keep learning and contribute to innovative projects that make an impact.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hamzaiftikhhar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamzaiftikhhar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hamzaiftikhhar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
