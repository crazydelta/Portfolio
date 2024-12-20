import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import abc from "../../Assets/Projects/abc.png";
import webscraper from "../../Assets/Projects/webscraper.png";
import ppf from "../../Assets/Projects/ppf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abc}
              isBlog={false}
              title="Health Card"
              description="The Medilink One Health One Card project introduces a unified health card that serves as a centralized repository for medical information, promoting interoperability among healthcare providers and empowering individuals with greater control over their health data."
              ghLink="https://github.com/crazydelta/Medilink-one-health-one-card"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webscraper}
              isBlog={false}
              title="Web Scraper"
              description="Professional 
              1. Developed a web scraping solution using React Js for front end and Python Flask for back end.
              2. Automated the process of web scraping, allowing for the download of JSON or CSV files of scraped data.
              3. Aimed to build the project at full scale with proper collaborations."
              ghLink="https://github.com/crazydelta/WebScraper"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppf}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio built with React to showcase my web development skills. Features include a project gallery, contact form, and smooth navigation with React Router. The design is responsive and mobile-first, with a focus on user experience."
              ghLink="https://github.com/crazydelta/Portfolio/tree/main"
              demoLink="https://rajeshportfolio-nine.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
