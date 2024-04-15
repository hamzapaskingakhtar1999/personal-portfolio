import React from "react";

import styles from "./hero.module.css";

import ready from "../../assets/images/hero/ready.png";
import hand from "../../assets/svg/Hero/hand.svg";
import download from "../../assets/svg/Hero/download.svg";

import hamza from "../../hamza_cv.pdf";

const Hero = () => {
  return (
    <div className={styles.hero} id="home">
      {/* Left */}
      <div className={styles.left}>
        <h1 className={styles.name}>
          <img
            src={hand}
            style={{ height: "50px", width: "50px", marginRight: "15px" }}
          />
          Hello! I'm <span style={{ color: "#feb901" }}>Hamza P. Akhtar</span>
        </h1>
        <p className={styles.profession}>
          A{" "}
          <span style={{ fontSize: "31px", color: "white", fontWeight: "600" }}>
            Full Stack Web Developer
          </span>
        </p>
        <p className={styles.experience}>
          with{" "}
          <span
            style={{
              padding: "5px 15px",
              backgroundColor: "#242424",
              borderRadius: "20px",
              color: "#feb901",
              border: "2px solid #3a3a3a",
              fontWeight: "700",
            }}
          >
            1.5+ years
          </span>{" "}
          of Experience
        </p>
        {/* Buttons */}
        <div className={styles.buttons}>
          <a
            href={hamza}
            download="Hamza_CV"
            target="_blank"
            style={{ all: "unset" }}
          >
            <button className="transparentYellowButton">
              <img src={download} style={{ width: "30px", height: "30px" }} />
              Resume
            </button>
          </a>
          <a href="#connect" style={{ all: "unset" }}>
            <button className="yellowButton">Hire Me</button>
          </a>
        </div>
      </div>

      {/* Right */}
      <div className={styles.right}>
        <img src={ready} style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  );
};

export default Hero;
