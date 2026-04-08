import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

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
              I'm <b className="purple">Vineet Vashist</b> — a <b className="purple">Product-focused Frontend Engineer</b> with a strong foundation in building scalable systems, currently transitioning into <b className="purple">Product / Technical PM roles</b>.
              
              <br />
              <br />
              At <b className="purple">BigWings LLC</b>, I work closely with cross-functional teams on a U.S.-market B2B SaaS platform — contributing to product decisions, defining user workflows, and delivering high-impact features.
              
              <br />
              <br />
              Recently worked on a Transportation Management System (TMS), where I contributed to product definition, prioritised key workflows, and helped ship OCR-based load automation that reduced manual effort by{" "}
              <b className="purple">60%</b>.
              
              <br />
              <br />
              My experience spans{" "}
              <i>
                <b className="purple">
                  product requirement definition, user flows, feature prioritisation (RICE/MoSCoW), and Agile execution
                </b>
              </i>
              , with hands-on involvement in solving real business problems.
              
              <br />
              <br />
              I work with{" "}
              <i>
                <b className="purple">
                  Figma, Jira, Notion, Miro, and Confluence
                </b>
              </i>
              , and leverage{" "}
              <i>
                <b className="purple">
                  Google Analytics and user insights
                </b>
              </i>
              &nbsp;to validate product decisions.
              
              <br />
              <br />
              My technical background in{" "}
              <i>
                <b className="purple">
                  React.js, React Native, TypeScript, and AI integrations (OpenAI/Gemini, OCR)
                </b>
              </i>
              &nbsp;helps me collaborate effectively with engineering teams and ship faster.
              
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="img-fluid">
            <Tilt>
              <img style={{ marginTop: 20 }} src={myImg} className="img-fluid circular-img" alt="avatar" />
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
                  href="https://github.com/1910991147"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/vineetvashist1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaBehance />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vineet-vashist-b1862921b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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