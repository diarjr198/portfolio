import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/MyImg.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who Am <span className="teal"> I? </span>
            </h1>
            <p className="home-about-body">
              I am Diar Julianto Rahadi, a graduate of SMK Negeri 7 Jakarta.
              Department of Computer and Network Engineering. Personally,
              well-rounded person who has an interest in Technology (IT), such
              as Software Development and Computer Technology. I can work as a
              team or individual, able to adapt and communicate well, fast
              learner, detail oriented, hard worker, interested in learning new
              things, and have good time management.
              <br />
              <br />I occasionally immerse myself with
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, ReactJS, NodeJS and ExpressJS.{" "}
                </b>
              </i>
              <br />
              {/* <br />I am the co-founder of a science magazine called
              <i>
                <a href="https://thegeekly.net">
                  <b className="teal"> The Geekly</b>
                </a>
                ; a magazine exploring the universe through the lens of science.
                I have also participated in various{" "}
                <a href="https://www.linkedin.com/in/dhruv-ramu-1a325622a/details/honors/">
                  <b className="teal">Hackathons</b>
                </a>{" "}
                and have applied my skills in a competitive environment.
              </i>
              <br />
              <br />I also utilize <b className="teal"> LaTeX </b> and
              <b className="teal"> Markdown. </b> */}
              {/*and
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
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
            <h1>Connect with me</h1>
            <p>
              I'm available on these <span className="teal">platforms </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/diarjr198"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/diar-julianto-rahadi-b1324219a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:diar.student@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
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
