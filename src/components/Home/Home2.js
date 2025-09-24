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
              Hello, My name is Vineet Vashist. I am a Frontend Developer currently working at BigWings LLC. I have experience crafting
              user-friendly web app and with AI Integration that are both visually stunning
              and functionally seamless.
              {/* I'm highly proficient in the core
              technologies like HTML, CSS, JavaScript, React Native, ReactJs and
              a strong understanding of UI/UX design principles and tools like
              Figma, InVision, Canva, Sketch, Wireframing, User Research */}
              <br />
              <br />I am proficient in frontend technologies like
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React.js, React Native, HTML5, CSS3{" "}
                </b>
              </i>
              <br />
              <br />
              I work with modern UI frameworks and tools including &nbsp;
              <i>
                <b className="purple">
                  Tailwind CSS, Material-UI, Chakra UI, Bootstrap, AntDesign, Vite, Webpack
                </b>
              </i>
              <br />
              <br />
              I also have expertise in AI/ML technologies like &nbsp;
              <i>
                <b className="purple">
                  OpenAI, Gemini, LangChain, OCR, Speech Recognition, TTS
                </b>
              </i>
              <br />
              <br />
              Along with strong UI/UX design skills using &nbsp;
              <i>
                <b className="purple">
                  Figma, InVision, Sketch, Wireframing, User Research
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="img-fluid" >
            <Tilt>
              <img style={{marginTop:20}} src={myImg} className="img-fluid circular-img" alt="avatar"  />
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
