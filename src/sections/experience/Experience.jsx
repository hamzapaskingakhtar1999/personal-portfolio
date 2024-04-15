import React from "react";

import styles from "./experience.module.css";

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
      points: [
        "Making sure the websites are responsive to different screen sizes using CSS, resulting in improved userexperience and engagement.",
        "Create designs and build stable and maintainable codebase using ReactJS.",
        "Implement additional features and integrated to the application",
        "Frequent testing to ensure that all the components are working as it should. Provide support to clients for any bugs that arise.",
        "Develop landing pages for business by using WordPress to effectively showcase their services.",
        "Managed to optimize the website leading to an overall increase of the performance score up to 85+ in both desktop and mobile",
        "Working directly with clients to develop technical solutions for their business cases.",
      ],
    },
    {
      company: "Codsoft",
      companyIcon: calendar,
      companyLocation: "Remote - India",
      date: "Jan 2023 - Feb 2023",
      dateIcon: calendar,
      position: "Full Stack Web Developer",
      positionIcon: calendar,
      points: [
        "Developed user interfaces using ReactJS and integrate with database (MongoDB)",
        "Manage authentication in the web applications through JWT’s.",
      ],
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
