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

const App = () => {
  return (
    <div className="center">
      <Hero />
      {/*     <hr
        style={{
          border: "1px solid yellow",
          width: "100%",
          marginTop: 30,
          marginBottom: 30,
        }}
      /> */}
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
