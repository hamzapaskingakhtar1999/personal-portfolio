import React from "react";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Education from "./sections/education/Education";
import Experience from "./sections/experience/Experience";
import Certificates from "./sections/certificates/Certificates";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Resume from "./sections/resume/Resume";
import Connect from "./sections/connect/Connect";
import Footer from "./sections/footer/Footer";

import "./App.css";
import Header from "./sections/header/Header";

const App = () => {
  return (
    <div className="center">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certificates />
      <Skills />
      <Projects />
      <Resume />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
