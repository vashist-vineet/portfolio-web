import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coucal from "../../Assets/Projects/124669.jpg";
import GolfStudy from "../../Assets/Projects/Golf_CaseStudy.png";
import Ecommerse from "../../Assets/download4.png";
import matrimonial from "../../Assets/Projects/img.jpg";
import mobile_app from "../../Assets/Projects/MobiPay.png";
import etrucking from "../../Assets/etrucking_img.jpeg";
import suicide from "../../Assets/25726540_7127986.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        {/* ── SECTION HEADER ── */}
        <h1 className="project-heading">
          Product <strong className="purple">Case Studies</strong>
        </h1>
        <p style={{ color: "white" }}>
          End-to-end ownership — from problem discovery and competitor research to shipped features and measurable impact.
        </p>

        {/* ── PM CASE STUDIES ── */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card" style={{ marginTop: 3 }}>
            <ProjectCard
              imgPath={etrucking}
              title="TechTruckers — All-in-One TMS"
              description="Contributed to product definition for a U.S.-market B2B SaaS TMS. Conducted competitor analysis (Samsara, Motive, Turvo), identified SMB automation gaps, and helped prioritise high-impact workflows. Shipped OCR-based load automation reducing manual effort by 60% and improving operational efficiency across dispatch, invoicing, and tracking."
              isCaseStudy={true}
              demoLink="https://www.notion.so/TechTruckers-335612ffcc9d80a28d0bdcaf8390d536"
              demoLinkLabel="View Case Study →"
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginTop: 3 }}>
            <ProjectCard
              imgPath={coucal}
              title="RcruitPanel — AI Recruitment Platform"
              description="Worked on product development and feature definition for an AI-powered recruitment platform. Benchmarked leading ATS tools, contributed to workflow design for resume screening and evaluation, and supported iterative improvements from 70% to 95% screening accuracy. Reduced hiring time by 60% and improved diversity metrics by 40%."
              isCaseStudy={true}
              demoLink="https://www.notion.so/RcruitPanel-333612ffcc9d80469256fd2960ca2a4a"
              demoLinkLabel="View Case Study →"
            />
          </Col>

        </Row>

        {/* ── SECTION DIVIDER ── */}
        <h1 className="project-heading" style={{ marginTop: "40px" }}>
          Design &amp; <strong className="purple">Dev Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Full-cycle delivery — from UX design to production-ready frontend systems.
        </p>

        {/* ── OTHER PROJECTS ── */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card" style={{ marginTop: 3 }}>
            <ProjectCard
              imgPath={matrimonial}
              isBehance={true}
              title="Matrimonial Platform — UI/UX Design"
              description="Delivered end-to-end product experience — from requirement gathering to UX design and frontend implementation. Focused on user journey optimisation, accessibility, and clean interaction flows."
              behanceLink="https://www.behance.net/gallery/200605725/Matrimonial-Website-UIUX-Design"
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginTop: 3 }}>
            <ProjectCard
              imgPath={mobile_app}
              isBehance={true}
              title="MobiPay — Mobile Wallet App"
              description="Designed a mobile wallet experience with transaction tracking and financial insights. Focused on usability, information hierarchy, and intuitive navigation."
              behanceLink="https://www.behance.net/gallery/178597449/MobiPay"
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginTop: 3 }}>
            <ProjectCard
              imgPath={GolfStudy}
              isBehance={true}
              title="SwingPro — UX Case Study"
              description="End-to-end UX case study including research, wireframing, and UI design. Built intuitive flows for score tracking, course navigation, and social engagement."
              behanceLink="https://www.behance.net/gallery/178991775/SwingPro-UXUI-Case-Study"
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginTop: 3 }}>
            <ProjectCard
              imgPath={Ecommerse}
              isBehance={true}
              title="Ecommerce — Fashion Platform"
              description="Designed a conversion-focused ecommerce experience with interactive product discovery and streamlined user flows."
              behanceLink="https://www.behance.net/gallery/202152009/Ecommerce-Web-Design"
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginTop: 3 }}>
            <ProjectCard
              imgPath={suicide}
              title="Udyat Tech — Website Redesign"
              description="Redesigned corporate website improving UX, responsiveness, and visual hierarchy, resulting in a more engaging user experience."
              demoLink="https://udyattech.com/"
              demoLinkLabel="View Live Site →"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;