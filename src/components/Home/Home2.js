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
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              
              <br />I am fluent in languages like
              <i>
                <b className="purple">Java, Javascript, Python, C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning.
                </b>
              </i>
              <br />
              <br />
              I use my passion for coding to develop products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pawansrinivas10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
  <a
    href="https://www.linkedin.com/in/sai-pawan-srinivas-98b4b9284/"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <FaLinkedinIn />
  </a>
</li>

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
    </Container>
  );
}
export default Home2;
