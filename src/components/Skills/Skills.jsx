// deuxieme fichier: Skills.jsx

import React from "react";
import "./Skills.css";
import { skills } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { FaPython, FaGitAlt } from "react-icons/fa";
import { GrArchlinux } from "react-icons/gr";

const Skills = () => {
  const { mySkills } = skills;

  return (
    <section className="skills" id="skills">
      <h1>
        <span className="logo">.</span> Skills
      </h1>
      <div className="skills-container-grid">
        {mySkills.map((skill, index) => (
          <SpotlightCard key={index}>
            <article className="skills-card">
              <h3 className="skills-title">
                {skill.python && <FaPython className="logo" size={20} />}
                {skill.git && <FaGitAlt className="logo" size={20} />}
                {skill.archlinux && (
                  <GrArchlinux className="logo" size={20} />
                )}{" "}
                {skill.title}
              </h3>
              <div className="skills-stack">
                {skill.skills.map((s, idx) => (
                  <span className={`${getColorClass(s)}`} key={idx}>
                    {s}
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
