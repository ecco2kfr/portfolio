import React from "react";
import "./Experience.css";
import { experience } from "../../data/portfolio";
import ReactMarkdown from "react-markdown";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { AiOutlineSecurityScan } from "react-icons/ai";

const Experience = () => {
  const { title, experiences } = experience;
  return (
    <section className="experience" id="experience">
      <h1><span className="logo">.</span> Experience</h1>
      <div className="experience-container-grid">
        {experiences.map((experience, index) => (
          <SpotlightCard>
            <article className="experience-card" key={index}>
              <div className="job-title-duration-section">
                <h2 className="job-title">
                  <AiOutlineSecurityScan className="logo" size={20} /> {""}
                  {experience.title} - {""}
                  <a target="_blank" href="https://www.airliquide.com/fr">
                    {experience.company}
                  </a>
                </h2>
                <p className="duration">{experience.duration}</p>
              </div>
              <ReactMarkdown className="experience-description">
                {experience.description}
              </ReactMarkdown>
            </article>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Experience;