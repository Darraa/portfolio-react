import React from "react";
import skills from "../../assets/img/skills-sprite.svg";
import SkillsElement from "../skillsElement/SkillsElement";
import "./skills.scss";

const Skills = () => {
    const skillsName = [
        "HTML",
        "CSS",
        "JavaScript",
        "Sass",
        "Git",
        "Webpack",
        "Bitbucket",
        "Bootstrap",
    ];
    const iconName = [
        "html5",
        "css3",
        "javascript",
        "sass",
        "git",
        "webpack",
        "bitbucket",
        "bootstrap",
    ];

    const renderSkills = () => {
        return skillsName.map((item, index) => (
            <SkillsElement
                key={index}
                skills={skills}
                iconName={iconName[index]}
                skillsName={item}
            />
        ));
    };

    return (
        <section id="skills" className="skills">
            <h3>Skills</h3>
            <ul className="skills__list">{renderSkills()}</ul>
        </section>
    );
};

export default Skills;
