import React from "react";
import Card from "react-bootstrap/Card";
import { MdCheckCircle } from "react-icons/md"; // Modern checkmark icon

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Hamza </span>  
            from <span className="purple">Lahore, Pakistan.</span>
            <br />
            I am currently in my 7th semester, pursuing a Bachelor's degree in Computer Science.
            <br />
            I have a strong passion for web development, AI, and building scalable applications.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <MdCheckCircle /> Playing Video Games
            </li>
            <li className="about-activity">
              <MdCheckCircle /> Exploring New Tech
            </li>
            <li className="about-activity">
              <MdCheckCircle /> Traveling & Food Hunting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building, keep learning, and make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Ali Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
