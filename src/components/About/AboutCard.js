import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple"> Rajesh </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently working as a Freelancer.
            <br />
             My stream of Education is Copmuter Science Engineering (AI & ML)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> On A Learning Spree
            </li>
            <li className="about-activity">
              <ImPointRight /> Combact Sports (Wushu)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
