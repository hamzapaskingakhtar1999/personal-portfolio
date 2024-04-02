import React from "react";
import styles from "./about.module.css";

import IconText from "../../components/iconText/IconText"

import headphone from "../../assets/svg/headphone.svg";
import books from "../../assets/svg/books.svg";
import code from "../../assets/svg/code.svg";
import exercise from "../../assets/svg/exercise.svg";
import movie from "../../assets/svg/movie.svg";
import travel from "../../assets/svg/travel.svg";

import { CiCircleChevDown } from "react-icons/ci";

const About = () => {
  const love = [
    { icon: code, title: "Building stuff through code" },
    { icon: books, title: "Reading Books" },
    { icon: travel, title: "Travelling" },
    { icon: exercise, title: "Fitness" },
    { icon: movie, title: "Watching Movies" },
    { icon: headphone, title: "Listening to music and podcasts" },
  ];

  return (
    <div className={styles.about}>
      <h1 className="yellow main-heading">About Me</h1>
      {/* Stats */}
      <div className={styles.stats}>
        {/* Left */}
        <div className={styles.aboutLeft}>
          <h2 className="yellow" style={{ fontSize: 34, marginTop: 0 }}>
            I Love
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {love.map((item) => (
              <IconText icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className={styles.aboutRight}>
          <div className={styles.rightItem}>
            <h2
              style={{
                color: "#ba8804",
                fontSize: "50px",
              }}
            >
              1.5+
            </h2>
            <h2
              style={{
                fontSize: "30px",
                textAlign: "center",
                marginTop: "-20px",
              }}
            >
              Years Experience
            </h2>
          </div>
          <div className={styles.rightItem}>
            <h2
              style={{
                color: "#ba8804",
                fontSize: "50px",
              }}
            >
              10+
            </h2>
            <h2
              style={{
                fontSize: "30px",
                textAlign: "center",
                marginTop: "-20px",
              }}
            >
              Projects Completed
            </h2>
          </div>
        </div>
      </div>
      {/* Paragraph About Me */}
      <div className={styles.paragraphContainer}>
        <p>
          With over 1.5 years of professional experience as a web developer and
          a passion for data analytics, I have crafted engaging, efficient, and
          scalable web applications for a variety of clients, successfully
          completing more than 10 projects to date. My expertise spans a broad
          range of technologies including HTML, CSS, JavaScript, ReactJS,
          NextJS, Redux, SCSS for front-end development, and MongoDB and
          PostgreSQL for database management. Furthermore, I excel in building
          mobile applications using React Native, bringing a comprehensive skill
          set to the table for cross-platform development. As a Data Analytics
          student, I am proficient in leveraging Python to uncover insights from
          data, integrating my analytical skills with my technical proficiency
          to develop data-driven solutions. My commitment to continuous learning
          and improvement, combined with my hands-on experience, enables me to
          tackle complex challenges and deliver innovative, user-centric
          solutions.
        </p>
      </div>
      {/* Button to Contact Me */}

      <button className="transparentYellowButton">
        About Me
        <CiCircleChevDown size={31} />
      </button>
    </div>
  );
};

export default About;
