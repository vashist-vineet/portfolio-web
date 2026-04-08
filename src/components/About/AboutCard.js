import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Vineet Vashist</span>, a{" "}
            <span className="purple">Product-focused Frontend Engineer</span>{" "}
            with a hybrid background in engineering and design, currently
            transitioning into{" "}
            <span className="purple">Product / Technical PM roles</span>.
            <br />
            <br />
            At <span className="purple">BigWings LLC</span>, I work closely with
            cross-functional teams to build and scale a U.S.-market B2B SaaS
            platform, contributing to product decisions, defining user
            workflows, and driving feature delivery with a focus on solving real
            business problems.
            <br />
            <br />
            I've shipped products like TechTruckers — a full-scale logistics TMS
            for the U.S. market — and CoucalAI, a recruitment automation
            platform that reduced hiring time by 60%.
            <br />
            <br />
            I'm drawn to <span className="purple">messy, complex problems </span>
            the kind where technology, user behaviour, and business constraints
            all collide at once. <br />
            <br />I hold a{" "}
            <span className="purple">B.Tech in Computer Science</span> (CGPA:
            9.5/10) from <span className="purple">Chitkara University</span> and
            am currently pursuing an <span className="purple">MBA (IT)</span>{" "}
            from <span className="purple">Amity University, Noida</span>. I'm
            also a <span className="purple">CAPM (PMI)</span> candidate and hold
            a <span className="purple">Meta UX/UI Design Certificate</span>.
            <br />
            <br />
            Outside of work, things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Badminton &amp; Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring product strategy and startup ecosystems
            </li>
            <li className="about-activity">
              <ImPointRight /> Binge-watching great cinema and series
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
