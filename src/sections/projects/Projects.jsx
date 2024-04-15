import React from "react";

import styles from "./projects.module.css";
/* Images */
import airport from "../../assets/images/projects/airport.png";
import codifyers from "../../assets/images/projects/codifyers.png";
import car from "../../assets/images/projects/car.png";
import food from "../../assets/images/projects/food.png";
import dashboard from "../../assets/images/projects/dashboard.png";
import total from "../../assets/images/projects/total.png";
import water from "../../assets/images/projects/water.png";
import coin from "../../assets/images/projects/coin.png";

/* SVG */
import calendar from "../../assets/svg/Education/calendar.svg";
import css from "../../assets/svg/Tools/css.svg";
import javascript from "../../assets/svg/Tools/javascript.svg";
import react from "../../assets/svg/Tools/reactjs.svg";
import next from "../../assets/svg/Tools/nextjs.svg";
import mongo from "../../assets/svg/Tools/mongo.svg";
import postman from "../../assets/svg/Tools/postman.svg";
import wordpress from "../../assets/svg/Tools/wordpress.svg";
import wix from "../../assets/svg/Tools/wix.svg";

import ProjectsItem from "../../components/projectsItem/ProjectsItem";

const projectslist = [
  {
    image: airport,
    title: "National Airport Taxi",
    workedOn: ["Website", "Admin Panel"],
    technologies: [
      { icon: css, text: "CSS" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "ReactJS" },
      { icon: next, text: "NextJS" },
      { icon: mongo, text: "MongoDB" },
      { icon: postman, text: "Postman" },
    ],
    link: "https://nationalairporttaxi.co.uk",
  },
  {
    image: codifyers,
    title: "Codifyers",
    workedOn: ["Website"],
    technologies: [
      { icon: css, text: "CSS" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "ReactJS" },
    ],
    link: "https://codifyers.com",
  },
  {
    image: car,
    title: "Car Rental",
    workedOn: ["Website"],
    technologies: [
      { icon: css, text: "CSS" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "ReactJS" },
    ],
    link: "https://car-rental-hpa.netlify.app/",
  },
  {
    image: food,
    title: "Seiwa Fastfood",
    workedOn: ["Website"],
    technologies: [
      { icon: css, text: "CSS" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "ReactJS" },
    ],
    link: "https://fastfood-hpa.netlify.app/",
  },
  {
    image: dashboard,
    title: "Admin Dashboard",
    workedOn: ["Website", "Admin Panel"],
    technologies: [
      { icon: css, text: "CSS" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "ReactJS" },
    ],
    link: "https://admin-dashboard-hpa.netlify.app/",
  },
  {
    image: total,
    title: "Total Builder - Renovation Landing Page",
    workedOn: ["Website", "Admin Panel"],
    technologies: [{ icon: wordpress, text: "WordPress" }],
    link: "https://totalbuilder.ie",
  },
  {
    image: water,
    title: "Water Treatment Landing Page",
    workedOn: ["Website"],
    technologies: [{ icon: wix, text: "Wix" }],
    link: "https://www.watertreatmentservices.ie/",
  },
  {
    image: coin,
    title: "Coin Info",
    workedOn: ["Website"],
    technologies: [
      { icon: css, text: "CSS" },
      { icon: javascript, text: "JavaScript" },
      { icon: react, text: "ReactJS" },
    ],
    link: "https://coin-info-version1-hpa.netlify.app/",
  },
];

const Colors = [
  "rgba(16, 39, 98,0.7)",
  "rgba(63, 3, 27,0.7)",
  "rgba(131, 3, 50,0.7)",
  "rgba(16, 39, 98,0.7)",
  "rgba(63, 3, 27,0.7)",
  "rgba(131, 3, 50,0.7)",
  "rgba(16, 39, 98,0.7)",
  "rgba(63, 3, 27,0.7)",
];

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <h1 className="main-heading yellow">
        Projects I've <br /> Worked on
      </h1>
      {/* Projects */}
      <div className={styles.projectsList}>
        {projectslist.map((item, index) => (
          <ProjectsItem item={item} color={Colors} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
