import React from "react";

import styles from "./education.module.css";
import EducationItem from "../../components/educationItem/EducationItem";
import calendar from "../../assets/svg/Education/calendar.svg";
import degree from "../../assets/svg/Education/degree.svg";
import short from "../../assets/svg/Education/short.svg";
import location from "../../assets/svg/Education/location.svg";
import university from "../../assets/svg/Education/university.svg";

const Education = () => {
  const eduItem = [
    {
      date: "Sep 2018 -  August 2022",
      dateIcon: calendar,
      level: "Undergraduate",
      levelIcon: calendar,
      degree: "Bachelor's Degree",
      degreeIcon: degree,
      short: "BSE",
      shortIcon: short,
      full: "Bachelor of Software Engineering",
      university: "COMSATS University",
      universityIcon: university,
      location: "Pakistan",
      locationIcon: location,
    },
    {
      date: "Jan 2024 - Jan 2025",
      dateIcon: calendar,
      level: "Graduate",
      levelIcon: calendar,
      degree: "Master's Degree",
      degreeIcon: degree,
      short: "MDA",
      shortIcon: short,
      full: "Masters of Data Analytics",
      university: "National College of Ireland (NCI)",
      universityIcon: university,
      location: "Ireland",
      locationIcon: location,
    },
  ];

  return (
    <div className={styles.education} id="education">
      <h1 className="main-heading yellow">Education</h1>
      {/* Education Items */}
      <div className={styles.educationItems}>
        {eduItem.map((item) => (
          <EducationItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
