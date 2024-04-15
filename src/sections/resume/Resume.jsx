import React from "react";

import styles from "./resume.module.css";

import hamza from "../../assets/images/resume/hamza.jpeg";

import hamzacv from "../../hamza_cv.pdf";

import { MdDownloading } from "react-icons/md";

const Resume = () => {
  return (
    <div className={styles.resume}>
      <h1 className="main-heading yellow">
        Checkout my <br />
        Resume
      </h1>
      <div className={styles.resumeContainer}>
        {/* Image */}
        <div className={styles.imageContainer}>
          <img
            src={hamza}
            style={{ height: "100px", width: "100px", borderRadius: "100px" }}
          />
        </div>
        <h1
          className="yellow"
          style={{ margin: "10px 0", textAlign: "center" }}
        >
          Hamza Pasking Akhtar
        </h1>
        <p style={{ marginTop: "-5px", textAlign: "center" }}>
          Full Stack Web Developer / Data Analyst
        </p>
        {/* Buttons */}
        <div className={styles.bottomButton}>
          {/* Resume */}
          <a href={hamzacv} download="Hamza CV" style={{ all: "unset" }}>
            <button className="transparentYellowButton">
              Resume
              <MdDownloading size={31} />
            </button>
          </a>
          <a href="#connect" style={{ all: "unset" }}>
            {/* Discuss Project */}
            <button className="yellowButton">Discuss Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
