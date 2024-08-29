import React, { useRef } from "react";
import ProfileLogo from "./assets/profile-1.jpg";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const imageRef = useRef(null);
  const wordRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true });
  const wordInView = useInView(wordRef, { once: true });

  return (
    <section
      id="home"
      className="container px-8 lg:px-36 max-w-full py-16 md:py-0"
    >
      <div className="flex relative flex-wrap gap-16 md:gap-0 justify-center items-center max-h-fit md:h-screen md:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
          }}
          className="w-full md:w-1/2 relative"
        >
          <img
            className="max-w-full mx-auto shadow-lg shadow-sky-600 rounded-full h-[250px] w-[250px] object-cover object-top md:h-[300px] md:w-[300px]"
            src={ProfileLogo}
            alt="My Profile Picture"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
          }}
          className="w-full mb-0 md:-my-0 md:w-1/2 md:h-fit"
        >
          <h3 className="font-semibold text-slate-400 text-4xl mb-2 md:text-lg lg:text-3xl">
            Hello 👋, i'm
          </h3>
          <h1 className="text-sky-600 my-2 font-bold text-5xl md:text-3xl lg:text-5xl lg:whitespace-nowrap">
            Daud Kresna Dwiva
          </h1>
          <p className="font-semibold text-slate-400 text-xl mb-8 md:mb-4">
            A Developer Based on Surabaya
          </p>
          <a
            href="mailto:daudkresna@gmail.com"
            className="font-bold text-lg text-slate-200 bg-sky-500 px-8 py-4  md:px-4 md:py-2 md:mb-0  rounded-md transition ease-in-out duration-500 hover:bg-sky-600 hover:text-slate-100"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
