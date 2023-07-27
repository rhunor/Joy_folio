import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Joy Ighoshemu </span>
            from <span className="purple">Lagos, Nigeria</span>
            <br /> I am Baby jay
            <br />
            this page is upoosed to be about you
            <br />
            <br />
            Apart from being a fish, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />being a fish pie
            </li>
            <li className="about-activity">
              <ImPointRight /> being a fish head
            </li>
            <li className="about-activity">
              <ImPointRight /> chicken and chips
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
