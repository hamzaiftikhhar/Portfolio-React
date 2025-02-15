import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  AiOutlineMail, 
  AiOutlineGithub, 
  AiOutlineLinkedin,
  AiOutlinePhone 
} from "react-icons/ai";
import "./Contact.css";

function Contact() {
  const contactInfo = [
    {
      icon: <AiOutlineMail size={30} />,
      title: "Email",
      content: "alihamza@example.com",
      link: "mailto:alihamza@example.com"
    },
    {
      icon: <AiOutlineGithub size={30} />,
      title: "GitHub",
      content: "github.com/alihamza",
      link: "https://github.com/alihamza"
    },
    {
      icon: <AiOutlineLinkedin size={30} />,
      title: "LinkedIn",
      content: "Connect with me",
      link: "https://linkedin.com/in/alihamza"
    }
  ];

  return (
    <Container fluid className="contact-section">
      <Container>
      <h1 className="text-center mb-3 text-white">
          Let's <span style={{ color: "#cd5ff8" }}>Connect</span>
        </h1>
        <p className="text-center text-white mb-5">
          Feel free to reach out through any of these channels
        </p>
        <Row className="justify-content-center contact-row">
          {contactInfo.map((info, index) => (
            <Col key={index} className="contact-column">
              <div className="contact-card-outer">
                <div className="contact-card-inner">
                  <div className="contact-icon">{info.icon}</div>
                  <h3 className="contact-title">{info.title}</h3>
                  <p className="contact-content">{info.content}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;