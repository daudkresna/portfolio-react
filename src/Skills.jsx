import React from "react";
import "./App.css";
import SkillCard from "./components/SkillCard";

const Skills = ({ skillList }) => {
  return (
    <div className="py-8">
      <h1 className="pb-8 font-bold text-2xl text-center text-sky-600 md:text-4xl">
        Skills
      </h1>
      <div className="py-2 w-full flex overflow-hidden logo relative">
        <div className="flex flex-shrink-0 logos-slide-left">
          {skillList.map((item, index) => (
            <SkillCard
              skillImg={item.skillImage}
              skillTitle={item.skillTitle}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-shrink-0 logos-slide-left">
          {skillList.map((item, index) => (
            <SkillCard
              skillImg={item.skillImage}
              skillTitle={item.skillTitle}
              key={index}
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="py-2 w-full flex flex-row-reverse overflow-hidden logo relative">
        <div className="flex flex-shrink-0 logos-slide-right">
          {skillList.map((item, index) => (
            <SkillCard
              skillImg={item.skillImage}
              skillTitle={item.skillTitle}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-shrink-0 logos-slide-right">
          {skillList.map((item, index) => (
            <SkillCard
              skillImg={item.skillImage}
              skillTitle={item.skillTitle}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

// before:w-16 before:h-16 before:bg-red-500 after:w-16 after:h-16 after:bg-red-500
