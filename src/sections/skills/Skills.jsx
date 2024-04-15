import React from "react";

import hamza from "../../hamza_cv.pdf"

import IconText from "../../components/iconText/IconText";

import html from "../../assets/svg/Tools/html.svg";
import css from "../../assets/svg/Tools/css.svg";
import javascript from "../../assets/svg/Tools/javascript.svg";
import reactjs from "../../assets/svg/Tools/reactjs.svg";
import nextjs from "../../assets/svg/Tools/nextjs.svg";
import framer from "../../assets/svg/Tools/framer.svg";
import redux from "../../assets/svg/Tools/redux.svg";
import scss from "../../assets/svg/Tools/scss.svg";
import tailwind from "../../assets/svg/Tools/tailwind.svg";
import python from "../../assets/svg/Tools/python.svg";
import git from "../../assets/svg/Tools/git.svg";
import postman from "../../assets/svg/Tools/postman.svg";
import mongo from "../../assets/svg/Tools/mongo.svg";
import postgresql from "../../assets/svg/Tools/postgresql.svg";
import github from "../../assets/svg/Tools/github.svg";
import vscode from "../../assets/svg/Tools/vscode.svg";
import docker from "../../assets/svg/Tools/docker.svg";
import graph from "../../assets/svg/Tools/graph.svg";

import { MdOutlineFileDownload } from "react-icons/md";

const Skills = () => {
  const technologies = [
    { icon: html, title: "HTML5" },
    { icon: css, title: "CSS3" },
    { icon: javascript, title: "JavaScript" },
    { icon: reactjs, title: "ReactJS" },
    { icon: redux, title: "Redux" },
    { icon: nextjs, title: "NextJS" },
    { icon: python, title: "Python" },
    { icon: framer, title: "Framer Motion" },
    { icon: graph, title: "GraphQL" },
    { icon: scss, title: "SCSS" },
    { icon: tailwind, title: "TailwindCSS" },
    { icon: git, title: "Git" },
    { icon: mongo, title: "MongoDB" },
    { icon: postgresql, title: "PostgreSQL" },
    { icon: docker, title: "Docker" },
  ];

  const development = [
    { icon: vscode, title: "Visual Studio Code" },
    { icon: github, title: "Github" },
    { icon: postman, title: "Postman" },
  ];

  return (
    <div>
      <h1 className="main-heading yellow">Skills</h1>
      <h2 className="yellow" style={{ textAlign: "center", fontSize: 31 }}>
        Technologies I Use
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {technologies.map((item) => (
          <IconText icon={item.icon} title={item.title} />
        ))}
      </div>
      {/* Development Tools I use */}
      <h2 className="yellow" style={{ textAlign: "center", fontSize: 31 }}>
        Development Tools I Use
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {development.map((item) => (
          <IconText icon={item.icon} title={item.title} />
        ))}
      </div>
      {/* Button Download Resume */}
      <a
        href={hamza}
        download="Hamza_CV"
        target="_blank"
        style={{ all: "unset" }}
      >
        <button
          className="transparentYellowButton"
          style={{ margin: "50px auto 0 auto" }}
        >
          Download Resume
          <MdOutlineFileDownload size={31} />
        </button>
      </a>
    </div>
  );
};

export default Skills;
