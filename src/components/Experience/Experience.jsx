import React from "react";
import "./Experience.css";
import { experience } from "../../data/portfolio";
import ReactMarkdown from "react-markdown";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
const Experience = () => {
  const { title, experiences } = experience;
  return (
    <section className="experience" id="experience">
      <h1 class="highlightName">{title}</h1>
      <div className="experience-container-grid">
        {experiences.map((experience, index) => (
          <SpotlightCard spotlightColor="#a020f055">
            <article className="experience-card" key={index}>
              <div className="job-title-duration-section">
                <h2 className="job-title">
                  {experience.title} - <span>{experience.company}</span>
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
