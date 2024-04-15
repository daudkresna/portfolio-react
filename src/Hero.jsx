import React from "react";
import ProfileLogo from "./assets/profile-1.jpg";

const Hero = () => {
  return (
    <section id="home" className="container px-16 lg:px-36 max-w-full">
      <div className="flex flex-wrap min-h-screen md:flex-row-reverse">
        <div className="w-full self-center md:w-1/2">
          <img
            className="mb-20 max-w-full mx-auto shadow-lg shadow-sky-600 rounded-full h-[250px] w-[250px] object-cover object-top md:h-[300px] md:w-[300px]"
            src={ProfileLogo}
            alt="My Profile Picture"
          />
        </div>
        <div className="-my-32 w-full self-center mb-0 md:-my-0 md:w-1/2">
          <h3 className="font-semibold text-slate-400 text-2xl mb-2 md:text-lg lg:text-2xl">
            Hello 👋, i'm
          </h3>
          <h1 className="text-sky-600 my-2 font-bold text-2xl md:text-3xl lg:text-4xl">
            Daud Kresna Dwiva
          </h1>
          <p className="font-semibold text-slate-400 text-sm mb-4">
            A Developer Based on Surabaya
          </p>
          <a
            href="mailto:daudkresna@gmail.com"
            className="font-bold text-slate-200 bg-sky-500 px-4 py-2 rounded-md transition ease-in-out duration-500 hover:bg-sky-600 hover:text-slate-100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
