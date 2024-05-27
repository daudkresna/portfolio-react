import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Skills from "./Skills";
import reactImg from "./assets/skills/reactjs.png";
import javascript from "./assets/skills/js.png";
import html5 from "./assets/skills/html-5.png";
import css3 from "./assets/skills/css-3.png";
import python from "./assets/skills/python.png";
import nextjs from "./assets/skills/next-js.svg";
import mysql from "./assets/skills/mysql.svg";
import flutter from "./assets/skills/icon_flutter.png";

function App() {
  const skillList = [
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
    {
      skillTitle: "Flutter",
      skillImage: flutter,
    },
  ];
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills skillList={skillList} />
      <Portfolio skillList={skillList} />
      <Footer />
    </>
  );
}

export default App;
