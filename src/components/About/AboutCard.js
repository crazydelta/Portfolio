import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm Rajesh, a freelancer based in Hyderabad, India.
            With a background in Computer Science Engineering focused on AI & ML, I specialize in crafting innovative solutions through technology. Currently, I'm working as a freelancer, helping businesses and individuals build impactful projects.
            
            When I'm not immersed in coding, I love pushing my limits and exploring new experiences. Some of my passions include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies and diving into the latest trends in AI & ML
            </li>
            <li className="about-activity">
              <ImPointRight /> Combat Sports (Wushu) for staying active and sharpening my focus
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling to experience new cultures and broaden my horizons
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
