import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { about } from "../../data/portfolio";
import "./About.css";

const About = () => {
  const { title, description, cv, github, linkedin } = about;

  const descriptionParts = description.split("@Efrei");

  return (
    <section className="about" id="about">
      <h1>
        {title}
        <span className="highlightName"> @ecco2kfr</span>
      </h1>
      <p>
        {descriptionParts[0]}
        <span style={{ fontWeight: "bold" }} className="highlightName">
          @Efrei
        </span>
        {descriptionParts[1]}
      </p>
      <div className="about-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" size={30} />
        </a>
      </div>
    </section>
  );
};

export default About;
