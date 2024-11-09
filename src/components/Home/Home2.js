import React from "react";
import { Image } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import profilepic from '../../Assets/profilepic.jpg'
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
            I'm a full-stack developer specializing in the MERN stack, committed to creating reliable, meaningful websites that tackle real-world problems. My work revolves around crafting user-centered, practical digital solutions, grounded in my technical skills and my ability to adapt quickly to different environments and project needs.

              With a background in AI and innovation, I bring a unique perspective to web development. I don't just code for functionality; I design experiences that resonate with users and address tangible needs. My approach is deeply focused on understanding the challenges people face and translating that understanding into practical, digital solutions that make a difference. Whether it's enhancing financial literacy among Gen Z, simplifying career guidance, or exploring innovative concepts in other sectors, my work prioritizes impact and usability.

              My adaptability is one of my strongest assets. I’ve worked across diverse teams and tackled various projects, each with unique requirements and challenges. This experience has honed my ability to adjust seamlessly to new contexts, technologies, and client demands, making me a reliable team player and problem-solver. I thrive in dynamic, fast-paced environments where I can continuously learn and push my boundaries.

              I also place a strong emphasis on keeping up with industry trends, which fuels my commitment to innovation. Recently, I’ve been working on projects aimed at leveraging AI in career guidance, an area ripe for transformation. My experience with user-centered methodologies and the MERN stack allows me to create platforms that are not just functional but also highly personalized, addressing users’ evolving needs in a way that traditional solutions don’t.

              Ultimately, my work is guided by a mission to build digital products that matter—websites and platforms that go beyond code to provide users with real value. By combining my technical expertise in the MERN stack, a user-first mindset, and a passion for solving meaningful problems, I strive to make a positive impact through technology. I aim to continue refining my skills and exploring new ways to use web development to address relevant, pressing challenges across various sectors.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Image 
                src={profilepic} 
                alt="Profile Avatar" 
                roundedCircle 
                style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
              />
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
                  href="https://github.com/crazydelta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/RajeshJ10333416"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajesh-j---/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.1._4._rajesh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
