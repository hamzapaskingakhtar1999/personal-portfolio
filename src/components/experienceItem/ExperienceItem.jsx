import React from "react";

import styles from "./experienceitem.module.css";
import IconText from "../iconText/IconText";

import laptop from "../../assets/svg/Experience/laptop.svg";
import arrow from "../../assets/svg/Experience/arrow.svg";

const ExperienceItem = ({ item }) => {
  return (
    <div className={styles.experienceItem}>
      {/* Top: Company + Date Range*/}
      <div className={styles.top}>
        {/* Left */}
        <div className={styles.companyInfo}>
          <div
            style={{
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "100px",
            }}
          >
            <img
              src={item.companyIcon}
              style={{ height: "25px", width: "25px" }}
            />
          </div>

          <div>
            <h2 className="yellow">{item.company}</h2>
            <p style={{ marginTop: "-15px" }}>{item.companyLocation}</p>
          </div>
        </div>
        {/* Right */}
        <div>
          <IconText icon={item.companyIcon} title={item.date} />
        </div>
      </div>
      {/* Middle - Role */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          alignItems: "center",
          marginBottom: "-20px",
        }}
      >
        <img src={laptop} style={{ height: "45px", width: "45px" }} />
        <h2 style={{ color: "#0c0c0c" }}>{item.position}</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "gray",
        }}
      >
        {item.points.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
              marginBottom: "-15px",
            }}
          >
            <img src={arrow} style={{ height: "25px", width: "25px" }} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
