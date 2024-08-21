import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PortfolioCard = ({ image, title, text, tech, link, repo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(200px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="mt-4 md:w-1/2 md:p-4 md:mt-2"
    >
      <div>
        <img className="mb-2 rounded-md w-full h-[200px]" src={image} alt="" />
        <h2 className="mb-2 font-bold text-lg">{title}</h2>
        <p className="mt-2 mb-4 text-sm text-slate-600">{text}</p>
        <div className="flex flex-wrap w-full gap-4">
          {tech.map((item, index) => (
            <div key={index}>
              <img src={item} alt="" className="w-8 h-8 grayscale" />
            </div>
          ))}
        </div>

        <div className="relative flex gap-4">
          <a href={link} target="_blank">
            <button className="mt-4 font-bold text-slate-200 bg-sky-500 px-4 py-2 rounded-md transition ease-in-out duration-500 hover:bg-sky-600 hover:text-slate-100">
              Visit
            </button>
          </a>
          <a href={repo} target="_blank">
            <button className="mt-4 font-bold text-gray-400 bg-transparent border-2 border-sky-500 px-4 py-2 rounded-md transition ease-in-out duration-500 hover:bg-sky-600 hover:text-slate-100">
              Repo
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
