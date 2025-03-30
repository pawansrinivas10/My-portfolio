import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Pawan Srinivas </span>
            from <span className="purple"> Jamshedpur, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I am pursuing B. Tech. in Electronics and Communication Engineering at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sports and TV
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You can be the change!"{" "}
          </p>
          <footer className="blockquote-footer">Pawan Srinivas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
