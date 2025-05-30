import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";
import { projects } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";
import SpotlightCard from "../SpotlightCard/SpotlightCard";

const Projects = () => {
  const { title, personalProjects } = projects;
  return (
    <section className="projects" id="projects">
      <h1 className="highlightName">{title}</h1>
      <div className="container-grid">
        {personalProjects.map((project, index) => (
          <SpotlightCard
            spotlightColor="#a020f055"
            key={project.title || index}
          >
            <article className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technology-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span className={`${getColorClass(tech)}`} key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>

              {project.imageSrc && (
                <div className="img_pres">
                  <img
                    src={project.imageSrc}
                    alt={`Aperçu du projet ${project.title}`}
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}

              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="icon" size={30} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" size={30} />
                </a>
              </div>
            </article>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
