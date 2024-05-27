import React from "react";

import SkillCard from "./components/SkillCard";

const Skills = ({ skillList }) => {
  return (
    <div className="py-8 md:px-16">
      <h1 className="pb-8 font-bold text-2xl text-center text-sky-600 md:text-4xl">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center items-center w-full gap-4">
        {skillList.map((item, index) => (
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
