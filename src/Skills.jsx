import React from "react";
import reactImg from "./assets/skills/reactjs.png";
import javascript from "./assets/skills/js.png";
import html5 from "./assets/skills/html-5.png";
import css3 from "./assets/skills/css-3.png";
import python from "./assets/skills/python.png";
import nextjs from "./assets/skills/next-js.svg";
import mysql from "./assets/skills/mysql.svg";
import SkillCard from "./components/SkillCard";

const Skills = () => {
  const skills = [
    {
      skillTitle: "HTML",
      skillImage: html5,
    },
    {
      skillTitle: "CSS",
      skillImage: css3,
    },
    {
      skillTitle: "Javascript",
      skillImage: javascript,
    },
    {
      skillTitle: "Python",
      skillImage: python,
    },
    {
      skillTitle: "React",
      skillImage: reactImg,
    },
    {
      skillTitle: "NextJS",
      skillImage: nextjs,
    },
    {
      skillTitle: "MySQL",
      skillImage: mysql,
    },
  ];
  return (
    <div className="py-8 md:px-16">
      <h1 className="pb-8 font-bold text-2xl text-center text-sky-600 md:text-4xl">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center items-center w-full gap-4">
        {skills.map((item, index) => (
          <SkillCard
            skillImg={item.skillImage}
            skillTitle={item.skillTitle}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
