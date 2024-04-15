import React from "react";

import styles from "./experience.module.css"

import calendar from "../../assets/svg/Education/calendar.svg";
import ExperienceItem from "../../components/experienceItem/ExperienceItem";

const Experience = () => {
  const experience = [
    {
      company: "Freelance Web Developer",
      companyIcon: calendar,
      companyLocation: "Remote",
      date: "Sep 2022 - Present",
      dateIcon: calendar,
      position: "Full Stack Web Developer",
      positionIcon: calendar,
      points: ["Point 1", "Point 2", "Point 3", "Point 4"],
    },
    {
      company: "Precise Technology",
      companyIcon: calendar,
      companyLocation: "Remote - Canada",
      date: "Sep 2022 - Oct 2022",
      dateIcon: calendar,
      position: "Frontend Web Developer",
      positionIcon: calendar,
      points: ["Point 1", "Point 2", "Point 3", "Point 4"],
    },
    {
      company: "Codsoft",
      companyIcon: calendar,
      companyLocation: "Remote - India",
      date: "Jan 2023 - Feb 2023",
      dateIcon: calendar,
      position: "Full Stack Web Developer",
      positionIcon: calendar,
      points: ["Point 1", "Point 2", "Point 3", "Point 4"],
    },
  ];

  return (
    <div className={styles.experience} id="experience">
      <h1 className="main-heading yellow">Experience</h1>
      {/* Experience Items */}
      <div>
        {experience.map((item) => (
          <ExperienceItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
