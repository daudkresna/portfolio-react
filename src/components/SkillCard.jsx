import React from "react";

const SkillCard = ({ skillImg, skillTitle }) => {
  return (
    <div className="flex justify-center mr-4 items-center bg-white w-fit p-2 gap-2 rounded-lg">
      <img src={skillImg} alt={skillTitle} className="h-10" />
      <h1 className="">{skillTitle}</h1>
    </div>
  );
};

export default SkillCard;
