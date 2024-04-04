import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
