import React from "react";
import "./Skills.css";
import { skills } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
const Skills = () => {
  const { title, mySkills } = skills;
  return (
    <section className="skills" id="skills">
      <h1 class="highlightName">{title}</h1>
      <div className="skills-container-grid">
        {mySkills.map((skill, index) => (
          <SpotlightCard spotlightColor="#a020f055">
            <article className="skills-card" key={index}>
              <h3 className="skills-title">{skill.title}</h3>
              <div className="skills-stack">
                {skill.skills.map((skill, index) => (
                  <span className={`${getColorClass(skill)}`} key={index}>
                    {skill}
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

export default Skills;
