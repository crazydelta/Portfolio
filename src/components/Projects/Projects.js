import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import abc from "../../Assets/Projects/abc.png";
import webscraper from "../../Assets/Projects/webscraper.png";
import ppf from "../../Assets/Projects/ppf.png";
import ddg from "../../Assets/Projects/ddg.png";
import ytb from "../../Assets/Projects/ytb.png";


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
              imgPath={ddg}
              isBlog={false}
              title="DigiDaksha||Digital Marketing Agency"
              description="This project was developed using React.js for the frontend and Node.js for the backend. It features a visually appealing and user-friendly UI, along with SEO optimization. The project was created for a client who wanted to launch a digital marketing agency. The frontend was deployed on Vercel, and the domain name was configured through GoDaddy, while the backend was deployed on Render. In the end, the client was very satisfied with the results."
              ghLink= "https://github.com/crazydelta/DigiDaksha"
              demoLink="https://digidaksha.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytb}
              isBlog={false}
              title="NxtWatch"
              description="Full stack application built using mern stack. for crud operations Sqlite has been used."
              ghLink="https://github.com/crazydelta/Portfolio/tree/main"
              demoLink="https://nxtwatchr.ccbp.tech/"              
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
