import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Word = ({ paragraph }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <motion.p
      ref={ref}
      style={{ opacity: scrollYProgress }}
      className="text-slate-300 md:text-2xl flex flex-wrap "
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <AnimatedWord key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </AnimatedWord>
        );
      })}
    </motion.p>
  );
};

const AnimatedWord = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-2 mt-2 relative text-white">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
export default Word;
