import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiMui,
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiChakraui,
  SiVite,
  SiWebpack,
  SiVitest,
  SiAntdesign,
  SiOpenai,
  SiGooglegemini,
  SiDeepgram,
} from "react-icons/si";
import { 
  HiSpeakerWave,
  HiMicrophone,
} from "react-icons/hi2";
import { TbBrandReactNative } from "react-icons/tb";
import gemini from "../../Assets/google-gemini-icon.png";
function Techstack() {
  return (
    <>
      {/* Frontend Technologies */}
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <DiJavascript1 />
            <span className="tech-tooltip">JavaScript</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiTypescript />
            <span className="tech-tooltip">TypeScript</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <DiReact />
            <span className="tech-tooltip">React.js</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <TbBrandReactNative />
            <span className="tech-tooltip">React Native</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiHtml5 />
            <span className="tech-tooltip">HTML5</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiCss3 />
            <span className="tech-tooltip">CSS3</span>
          </div>
        </Col>
      </Row>
      
      {/* UI Libraries & Frameworks */}
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiTailwindcss />
            <span className="tech-tooltip">Tailwind CSS</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiMui />
            <span className="tech-tooltip">Material-UI</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiChakraui />
            <span className="tech-tooltip">Chakra UI</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiBootstrap />
            <span className="tech-tooltip">Bootstrap</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiAntdesign />
            <span className="tech-tooltip">Ant Design</span>
          </div>
        </Col>
      </Row>

      {/* Build Tools & Testing */}
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiVite />
            <span className="tech-tooltip">Vite</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiWebpack />
            <span className="tech-tooltip">Webpack</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiVitest />
            <span className="tech-tooltip">Vitest</span>
          </div>
        </Col>
      </Row>

      {/* AI/ML Technologies */}
      <h3 style={{ color: "#c770f0", textAlign: "center", marginBottom: "30px", marginTop: "20px" }}>
        AI/ML Technologies
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiOpenai />
            <span className="tech-tooltip">OpenAI</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <img src={gemini} width={80} height={80} alt="Gemini" style={{ fontSize: "10px", color: "#c770f0" }} />
            <span className="tech-tooltip">Gemini</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <div style={{ fontSize: "60px", color: "#c770f0" }}>🔗</div>
            <span className="tech-tooltip">LangChain</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <div style={{ fontSize: "60px", color: "#c770f0" }}>📄</div>
            <span className="tech-tooltip">OCR</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <div style={{ fontSize: "60px", color: "#c770f0" }}>🎤</div>
            <span className="tech-tooltip">Speech Recognition</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <div style={{ fontSize: "60px", color: "#c770f0" }}>🔊</div>
            <span className="tech-tooltip">Text-to-Speech</span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
