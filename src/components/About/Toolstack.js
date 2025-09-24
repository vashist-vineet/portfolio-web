import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiInvision,
  SiGithub,
  SiFigma,
  SiSketch,
  SiMiro,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-wrapper">
          <SiFigma />
          <span className="tech-tooltip">Figma</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-wrapper">
          <SiInvision />
          <span className="tech-tooltip">InVision</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-wrapper">
          <SiMiro />
          <span className="tech-tooltip">Miro</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-wrapper">
          <SiGithub />
          <span className="tech-tooltip">GitHub</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-wrapper">
          <SiPostman />
          <span className="tech-tooltip">Postman</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-wrapper">
          <SiSketch />
          <span className="tech-tooltip">Sketch</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
