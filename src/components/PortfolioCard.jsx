import React from "react";

const PortfolioCard = ({ image, title, text, link }) => {
  return (
    <div className="mt-4 md:w-1/2 md:p-4 md:mt-2">
      <img className="mb-2 rounded-md w-full h-[200px]" src={image} alt="" />
      <h2 className="mb-2 font-bold text-lg">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
      <div className="relative">
        <a href={link} target="_blank">
          <button className="mt-4 font-bold text-slate-200 bg-sky-500 px-4 py-2 rounded-md transition ease-in-out duration-500 hover:bg-sky-600 hover:text-slate-100">
            Visit
          </button>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
