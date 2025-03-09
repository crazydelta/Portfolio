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
              description="The NxtWatch project is a web application designed to provide a seamless user experience with features like user authentication and a responsive interface. It is built with React.js for the frontend, ensuring a dynamic and interactive user interface. The application uses React Router for smooth navigation, while CSS is used for styling, with support for both dark and light themes. The project also incorporates Local Storage for maintaining user session data and preferences. The design is fully responsive, adapting to different screen sizes, and ensures an optimal experience on both desktop and mobile devices. This project demonstrates a solid understanding of modern frontend development with a focus on user-friendly design and performance optimization."
              ghLink="https://github.com/crazydelta/Portfolio/tree/main"
              demoLink="https://nxtwatchr.ccbp.tech/"              
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webscraper}
              isBlog={false}
              title="Web Scraper"
              description="The WebScraper project is a web scraping tool designed to extract data from websites. Built primarily using Python, it utilizes libraries such as BeautifulSoup and Requests to crawl and scrape web pages for useful information. The project is structured to allow customization in terms of what data to collect, and it can be configured to store the scraped data into different formats such as CSV or JSON for further analysis. Additionally, the tool includes a Flask backend to manage the scraping process, and it is capable of handling multiple requests concurrently. This project is ideal for gathering and processing large amounts of information from websites efficiently."
              ghLink="https://github.com/crazydelta/WebScraper"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppf}
              isBlog={false}
              title="Portfolio"
              description="The Portfolio project is a personal portfolio website designed to showcase an individual's work and skills. It is built using React.js for the frontend, ensuring a dynamic, interactive user interface. The site leverages Node.js and Express.js for the backend, providing a smooth and scalable solution. The design is styled with CSS3 and React-Bootstrap, making it fully responsive and easy to customize. The portfolio features a multi-page layout and is deployed on Vercel for seamless hosting and performance. This project is ideal for showcasing projects, skills, and achievements in a visually appealing and professional way."
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
