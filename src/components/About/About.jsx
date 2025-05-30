import React from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { about } from "../../data/portfolio";
import "./About.css";
import SplitText from "../SplitText/SplitText";

const About = () => {
  const { title, description, github, instagram, discord, mail } = about;

  const descriptionParts = description.split("@Efrei");

  return (
    <section className="about" id="about">
      <SplitText
        text={
          <>
            <span class="devant">
              {title}
              <span> @ecco2kfr </span>
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
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" size={50} />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" size={50} />
        </a>
        <a href={discord} target="_blank" rel="noopener noreferrer">
          <FaDiscord className="icon" size={50} />
        </a>
        <a href={mail} target="_blank" rel="noopener noreferrer">
          <SiGmail className="icon" size={50} />
        </a>
      </div>
    </section>
  );
};

export default About;
