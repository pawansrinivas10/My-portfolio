import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by pawansrinivas10</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/pawansrinivas10"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sai-pawan-srinivas-98b4b9284/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li> */}
            
            <li className="social-icons">
              <a
                href="https://codeforces.com/profile/pawansrinivas10"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Codeforces_logo.png"
                  alt="Codeforces"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://leetcode.com/pawansrinivas10"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
