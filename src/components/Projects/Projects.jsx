import { FaLink, FaGithub } from "react-icons/fa";
import "./Projects.css";
import { projects } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";
import SpotlightCard from "../SpotlightCard/SpotlightCard";

const Projects = () => {
  const { personalProjects } = projects;
  return (
    <section className="projects" id="projects">
      <h1>
        <span className="logo">.</span> Projects
      </h1>
      <div className="container-grid">
        {personalProjects.map((project, index) => (
          <SpotlightCard key={project.title || index}>
            <article className="project-card">
              <h3 className="project-title">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lien vers la démo du projet ${project.title}`}
                  >
                    <FaLink className="icon" size={25} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lien GitHub du projet ${project.title}`}
                  >
                    <FaGithub className="icon" size={25} />
                  </a>
                )}
                {""} {project.title}
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="technology-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span className={`${getColorClass(tech)}`} key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
