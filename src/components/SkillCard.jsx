import React from "react";

const SkillCard = ({ skillImg, skillTitle }) => {
  return (
    <div className="flex flex-row justify-center items-center bg-white w-fit p-2 gap-2 drop-shadow-lg rounded-lg">
      <img src={skillImg} alt={skillTitle} className="h-10" />
      <h1 className="">{skillTitle}</h1>
    </div>
  );
};

export default SkillCard;
