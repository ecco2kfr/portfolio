import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { about } from "../../data/portfolio";
import "./About.css";
import SplitText from "../SplitText/SplitText"; // Ton composant SplitText

const About = () => {
  const { title, description, cv, github, linkedin } = about;

  const descriptionParts = description.split("@Efrei");

  return (
    <section className="about" id="about">
      <SplitText
        text={
          <>
            <span class="devant">
              {title}
              <span className="highlightName"> @ecco2kfr</span>
            </span>
          </>
        }
        delay={40}
        duration={1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 20 }} 
        to={{ opacity: 1, y: 0 }}
      />

      <p>
        {descriptionParts[0]}
        <span style={{ fontWeight: "bold" }} className="highlightName">
          @Efrei
        </span>
        {descriptionParts[1]}
      </p>
      <div className="about-links">
        {/* Assure-toi que github et linkedin sont bien définis dans 'about' */}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" size={30} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" size={30} />
          </a>
        )}
      </div>
    </section>
  );
};

export default About;
