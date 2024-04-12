import React from "react";

import styles from "./educationItem.module.css";
import IconText from "../iconText/IconText";

/* SVG */
import calendar from "../../assets/svg/Education/calendar.svg";
import level from "../../assets/svg/Education/level.svg";

const EducationItem = ({ item }) => {
  {
    console.log(item.degreeIcon);
  }
  return (
    <div className={styles.educationItem}>
      {/* Top: Year Range + Education Level*/}
      <div className={styles.top}>
        {/* Year Range */}
        <div className={styles.dateRange}>
          <img src={item.dateIcon} style={{ height: "25px", width: "25px" }} />
          <p>{item.date}</p>
        </div>
        <IconText icon={level} title={item.level} />
      </div>
      {/* Degree + Short Form */}
      <div className={styles.middle}>
        <IconText icon={item.degreeIcon} title={item.degree} />
        <IconText icon={item.shortIcon} title={item.short} />
      </div>
      {/* Full Degree Name */}
      <h3 style={{ margin: 0, fontSize: 26 }}>{item.full}</h3>
      {/* Bottom */}
      <div className={styles.bottom}>
        {/* University Name */}
        <div className={styles.simpleIconText}>
          <img
            src={item.universityIcon}
            style={{ height: "25px", width: "25px" }}
          />
          <p style={{ fontWeight: 700 }}>{item.university}</p>
        </div>
        {/* University Location */}
        <div className={styles.simpleIconText}>
          <img
            src={item.locationIcon}
            style={{ height: "25px", width: "25px" }}
          />
          <p style={{ fontWeight: 700 }}>{item.location}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
