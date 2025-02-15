import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  AiOutlineMail, 
  AiOutlineGithub, 
  AiOutlineLinkedin
} from "react-icons/ai";
import "./Contact.css";

function Contact() {
  const contactInfo = [
    {
      icon: <AiOutlineMail size={30} />,
      title: "Email",
      link: "mailto:alihamx366a@gmail.com"
    },
    {
      icon: <AiOutlineGithub size={30} />,
      title: "GitHub",
      link: "https://github.com/hamzaiftikhhar"
    },
    {
      icon: <AiOutlineLinkedin size={30} />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ali-hamza-254380317/"
    }
  ];

  return (
    <Container fluid className="contact-section">
      <Container>
        <h1 className="text-center mb-3 text-white">
          Let's <span id="contact" style={{ color: "#cd5ff8" }}>Connect</span>
        </h1>
        <p className="text-center text-white mb-5">
          Feel free to reach out through any of these channels
        </p>
        <Row className="justify-content-center contact-row">
          {contactInfo.map((info, index) => (
            <Col key={index} className="contact-column">
              <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-card-link">
                <div className="contact-card-outer">
                  <div className="contact-card-inner">
                    <div className="contact-icon">{info.icon}</div>
                    <h3 className="contact-title">{info.title}</h3>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
