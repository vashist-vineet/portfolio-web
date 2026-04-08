import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJira,
  SiNotion,
  SiConfluence,
  SiTrello,
  SiGoogleanalytics,
  SiSlack,
  SiFigma,
  SiMiro,
  SiGithub,
  SiPostman,
  SiGooglesheets,
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <h3 style={{ color: "#c770f0", textAlign: "center", marginBottom: "20px", marginTop: "10px" }}>
        Product &amp; Project Management
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiJira />
            <span className="tech-tooltip">Jira</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiNotion />
            <span className="tech-tooltip">Notion</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiConfluence />
            <span className="tech-tooltip">Confluence</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiTrello />
            <span className="tech-tooltip">Trello</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiGoogleanalytics />
            <span className="tech-tooltip">Google Analytics</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiGooglesheets />
            <span className="tech-tooltip">Google Sheets</span>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiSlack />
            <span className="tech-tooltip">Slack</span>
          </div>
        </Col>
      </Row>

      <h3 style={{ color: "#c770f0", textAlign: "center", marginBottom: "20px" }}>
        Design &amp; Dev Tools
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div className="tech-icon-wrapper">
            <SiFigma />
            <span className="tech-tooltip">Figma</span>
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
      </Row>
    </>
  );
}

export default Toolstack;